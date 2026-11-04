"use client";
import { useCart } from "@/context/CartContext";
import { exportOrderExcel } from "@/lib/exportOrder";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiArrowLeft,
  HiMinus,
  HiOutlineCheckCircle,
  HiOutlineDownload,
  HiOutlineTrash,
  HiOutlineX,
  HiPlus,
} from "react-icons/hi";

type Step = "list" | "details" | "done";

const EMPTY_FORM = { name: "", firm: "", phone: "", address: "", note: "" };
const inputClass =
  "w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<Step>("list");
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);

  // Whenever the drawer closes, next open starts on the list view again
  useEffect(() => {
    if (!isOpen) {
      setStep("list");
      setError(null);
    }
  }, [isOpen]);

  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

  const update =
    (key: keyof typeof EMPTY_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Please enter a valid phone number (at least 10 digits).");
      return;
    }
    setError(null);
    exportOrderExcel(items, {
      name: form.name.trim(),
      firm: form.firm.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      note: form.note.trim(),
    });
    setStep("done");
  };

  const whatsappText = encodeURIComponent(
    `Hello, I'm ${form.name} from ${form.firm}. I've downloaded my order sheet from your website and am sharing it here.`
  );

  const title =
    step === "list" ? `Your Order List (${totalQty})` : step === "details" ? "Your details" : "Order sheet ready";

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
            {/* Header */}
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-5">
              <div className="flex items-center gap-2">
                {step === "details" && (
                  <button onClick={() => setStep("list")} aria-label="Back to order list" className="-ml-1 p-1">
                    <HiArrowLeft className="h-5 w-5" />
                  </button>
                )}
                <span className="h-display text-lg text-brand-black">{title}</span>
              </div>
              <button aria-label="Close order list" onClick={closeCart} className="p-1">
                <HiOutlineX className="h-6 w-6" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {step === "list" &&
                (items.length === 0 ? (
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
                            <p className="h-display mt-0.5 text-sm text-brand-black">{item.modelName}</p>
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
                ))}

              {step === "details" && (
                <form id="order-details-form" onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-brand-grey-700">
                    Fill in your details. They'll be added to the order sheet along with your {totalQty} item
                    {totalQty === 1 ? "" : "s"}.
                  </p>
                  <input required value={form.name} onChange={update("name")} placeholder="Your name *" className={inputClass} />
                  <input required value={form.firm} onChange={update("firm")} placeholder="Firm / company name *" className={inputClass} />
                  <input required type="tel" value={form.phone} onChange={update("phone")} placeholder="Phone number *" className={inputClass} />
                  <textarea required rows={3} value={form.address} onChange={update("address")} placeholder="Full address *" className={inputClass} />
                  <textarea
                    rows={3}
                    value={form.note}
                    onChange={update("note")}
                    placeholder="Additional note (optional): anything special you need with this order"
                    className={inputClass}
                  />
                  {error && <p className="text-sm text-brand-red">{error}</p>}
                </form>
              )}

              {step === "done" && (
                <div className="flex flex-col items-center pt-10 text-center">
                  <HiOutlineCheckCircle className="h-14 w-14 text-green-600" />
                  <h3 className="h-display mt-4 text-lg text-brand-black">Order sheet downloaded</h3>
                  <p className="mt-2 max-w-xs text-sm text-brand-grey-700">
                    Please send the downloaded sheet to us on WhatsApp so we can confirm your order.
                  </p>
                  <a
                    href={`https://wa.me/919259311378?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1DA851] transition-colors"
                  >
                    <FaWhatsapp className="h-4 w-4" /> Send on WhatsApp
                  </a>
                </div>
              )}
            </div>

            {/* Footer buttons */}
            {step === "list" && items.length > 0 && (
              <div className="space-y-3 border-t border-black/5 p-5">
                <div className="flex gap-2">
                  <button onClick={closeCart} className="btn-outline-dark flex-1 justify-center text-sm">
                    Add more products
                  </button>
                  <button onClick={() => setStep("details")} className="btn-primary flex-1 justify-center text-sm">
                    Order Now
                  </button>
                </div>
                <button onClick={clearCart} className="w-full text-center text-xs text-brand-grey-500 hover:text-brand-red">
                  Clear list
                </button>
              </div>
            )}

            {step === "details" && (
              <div className="border-t border-black/5 p-5">
                <button type="submit" form="order-details-form" className="btn-primary w-full justify-center">
                  <HiOutlineDownload className="h-4 w-4" /> Order Now — Download Sheet
                </button>
              </div>
            )}

            {step === "done" && (
              <div className="space-y-3 border-t border-black/5 p-5">
                <button onClick={closeCart} className="btn-outline-dark w-full justify-center text-sm">
                  Back to products
                </button>
                <button
                  onClick={() => {
                    clearCart();
                    closeCart();
                  }}
                  className="w-full text-center text-xs text-brand-grey-500 hover:text-brand-red"
                >
                  Clear list and close
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