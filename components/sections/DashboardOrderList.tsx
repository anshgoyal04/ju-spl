"use client";
import { useCart } from "@/context/CartContext";
import { exportOrderExcel } from "@/lib/exportOrder";
import Link from "next/link";
import { HiArrowRight, HiMinus, HiOutlineDownload, HiOutlineTrash, HiPlus } from "react-icons/hi";

export default function DashboardOrderList() {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="card-surface mt-10 p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="h-display text-xl text-brand-black">Your Order List ({totalQty})</h2>
        <Link href="/products" className="btn-outline-dark text-sm">
          Add products <HiArrowRight />
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="mt-6 text-sm text-brand-grey-500">
          Nothing added yet. Head to Products, search for your model, and add items to your order list.
        </p>
      ) : (
        <>
          <div className="mt-6 space-y-3">
            {items.map((item) => (
              <div key={item.sku} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-black/5 p-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-red">
                    {item.brand} · {item.variety}
                  </p>
                  <p className="h-display text-sm text-brand-black mt-0.5">{item.modelName}</p>
                  <p className="mt-1 text-xs text-brand-grey-500">Size: {item.size} · SKU: {item.sku}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => updateQuantity(item.sku, item.quantity - 1)} aria-label="Decrease quantity" className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-grey-50 hover:bg-brand-grey-100">
                    <HiMinus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.sku, item.quantity + 1)} aria-label="Increase quantity" className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-grey-50 hover:bg-brand-grey-100">
                    <HiPlus className="h-3.5 w-3.5" />
                  </button>
                  <button onClick={() => removeFromCart(item.sku)} aria-label="Remove item" className="text-brand-grey-400 hover:text-brand-red">
                    <HiOutlineTrash className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={() => exportOrderExcel(items)} className="btn-primary text-sm">
              <HiOutlineDownload className="h-4 w-4" /> Order Now — Download Sheet
            </button>
            <button onClick={clearCart} className="text-sm text-brand-grey-500 hover:text-brand-red">
              Clear list
            </button>
          </div>
        </>
      )}
    </div>
  );
}