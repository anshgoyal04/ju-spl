"use client";
import { createClient } from "@/lib/supabase/client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type CartItem = {
  sku: string;
  size: string;
  variety: string;
  modelName: string;
  brand: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  updateQuantity: (sku: string, quantity: number) => void;
  removeFromCart: (sku: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isLoggedIn: boolean;
};

const CartContext = createContext<CartContextType | null>(null);
const STORAGE_KEY = "spl-piston-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [userId, setUserId] = useState<string | null | undefined>(undefined); // undefined = not checked yet
  const [supabase] = useState(() => createClient());

  // Track login state
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUserId(data.user?.id ?? null));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session?.user?.id ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, [supabase]);

  // Load cart whenever login state resolves/changes
  useEffect(() => {
    if (userId === undefined) return; // still checking auth state
    let cancelled = false;

    async function load() {
      if (userId) {
        // Logged in — load from Supabase
        const { data } = await supabase
          .from("cart_items")
          .select("*")
          .eq("user_id", userId)
          .order("created_at", { ascending: false });

        if (cancelled) return;

        const dbItems: CartItem[] = (data ?? []).map((row) => ({
          sku: row.sku,
          size: row.size,
          variety: row.variety,
          modelName: row.model_name,
          brand: row.brand,
          quantity: row.quantity,
        }));

        // Merge any guest-cart items added before logging in
        let guestItems: CartItem[] = [];
        try {
          const saved = localStorage.getItem(STORAGE_KEY);
          if (saved) guestItems = JSON.parse(saved);
        } catch {}

        if (guestItems.length > 0) {
          for (const gi of guestItems) {
            const existing = dbItems.find((d) => d.sku === gi.sku);
            if (existing) existing.quantity += gi.quantity;
            else dbItems.unshift({ ...gi });
          }
          await Promise.all(
            guestItems.map((gi) => {
              const finalQty = dbItems.find((d) => d.sku === gi.sku)?.quantity ?? gi.quantity;
              return supabase.from("cart_items").upsert(
                {
                  user_id: userId,
                  sku: gi.sku,
                  size: gi.size,
                  variety: gi.variety,
                  model_name: gi.modelName,
                  brand: gi.brand,
                  quantity: finalQty,
                },
                { onConflict: "user_id,sku" }
              );
            })
          );
          localStorage.removeItem(STORAGE_KEY);
        }

        if (!cancelled) setItems(dbItems);
      } else {
        // Logged out — use guest cart from localStorage
        try {
          const saved = localStorage.getItem(STORAGE_KEY);
          setItems(saved ? JSON.parse(saved) : []);
        } catch {
          setItems([]);
        }
      }
      if (!cancelled) setHydrated(true);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [userId, supabase]);

  // Persist guest cart to localStorage (only while logged out)
  useEffect(() => {
    if (!hydrated || userId) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated, userId]);

  const addToCart: CartContextType["addToCart"] = (item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.sku === item.sku);
      const newQty = existing ? existing.quantity + 1 : 1;
      const next = existing
        ? [{ ...existing, quantity: newQty }, ...prev.filter((i) => i.sku !== item.sku)]
        : [{ ...item, quantity: 1 }, ...prev];

      if (userId) {
        supabase
          .from("cart_items")
          .upsert(
            {
              user_id: userId,
              sku: item.sku,
              size: item.size,
              variety: item.variety,
              model_name: item.modelName,
              brand: item.brand,
              quantity: newQty,
            },
            { onConflict: "user_id,sku" }
          )
          .then();
      }
      return next;
    });
    setIsOpen(true);
  };

  const updateQuantity = (sku: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) {
        if (userId) supabase.from("cart_items").delete().eq("user_id", userId).eq("sku", sku).then();
        return prev.filter((i) => i.sku !== sku);
      }
      if (userId) supabase.from("cart_items").update({ quantity }).eq("user_id", userId).eq("sku", sku).then();
      return prev.map((i) => (i.sku === sku ? { ...i, quantity } : i));
    });
  };

  const removeFromCart = (sku: string) => {
    if (userId) supabase.from("cart_items").delete().eq("user_id", userId).eq("sku", sku).then();
    setItems((prev) => prev.filter((i) => i.sku !== sku));
  };

  const clearCart = () => {
    if (userId) supabase.from("cart_items").delete().eq("user_id", userId).then();
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        isLoggedIn: !!userId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}