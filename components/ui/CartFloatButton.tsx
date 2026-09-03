"use client";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "@/context/CartContext";

export default function CartFloatButton() {
  const { items, openCart } = useCart();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  if (count === 0) return null;

  return (
    <button
      onClick={openCart}
      aria-label="Open order list"
      className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-black text-white shadow-lg transition-transform hover:scale-105"
    >
      <HiOutlineShoppingCart className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-xs font-bold">
        {count}
      </span>
    </button>
  );
}