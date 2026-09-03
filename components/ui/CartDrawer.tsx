"use client";
import { useCart } from "@/context/CartContext";
import { exportOrderExcel } from "@/lib/exportOrder";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiMinus, HiOutlineDownload, HiOutlineTrash, HiOutlineX, HiPlus } from "react-icons/hi";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

  const drawer = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/50"
          onClick={closeCart}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="ml-auto flex h-full w-[90%] max-w-md flex-col bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-5">
              <span className="h-display text-lg text-brand-black">Your Order List ({totalQty})</span>
              <button aria-label="Close order list" onClick={closeCart} className="p-1">
                <HiOutlineX className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <p className="mt-10 text-center text-sm text-brand-grey-500">
                  Your list is empty. Add products from the search results.
                </p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.sku} className="rounded-xl border border-black/5 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-red">
                            {item.brand} · {item.variety}
                          </p>
                          <p className="h-display text-sm text-brand-black mt-0.5">{item.modelName}</p>
                          <p className="mt-1 text-xs text-brand-grey-500">
                            Size: {item.size} · SKU: {item.sku}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.sku)}
                          aria-label="Remove item"
                          className="text-brand-grey-400 hover:text-brand-red"
                        >
                          <HiOutlineTrash className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.sku, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-grey-50 hover:bg-brand-grey-100"
                        >
                          <HiMinus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.sku, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-grey-50 hover:bg-brand-grey-100"
                        >
                          <HiPlus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="space-y-3 border-t border-black/5 p-5">
                <div className="flex gap-2">
                  <button
                    onClick={closeCart}
                    className="btn-outline-dark flex-1 justify-center text-sm"
                  >
                    Add more products
                  </button>
                  <button
                    onClick={() => exportOrderExcel(items)}
                    className="btn-primary flex-1 justify-center text-sm"
                  >
                    <HiOutlineDownload className="h-4 w-4" /> Order Now
                  </button>
                </div>
                <button onClick={clearCart} className="w-full text-center text-xs text-brand-grey-500 hover:text-brand-red">
                  Clear list
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(drawer, document.body);
}