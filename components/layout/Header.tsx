"use client";
import { NAV } from "@/data/nav";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiChevronDown, HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const mobileMenu = (
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-5">
              <span className="h-display text-lg">
                SPL <span className="text-brand-red">PISTON</span>
              </span>
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="p-1">
                <HiOutlineX className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-3">
              {NAV.map((item) => (
                <div key={item.label} className="border-b border-black/5 last:border-0">
                  <button
                    className="flex w-full items-center justify-between px-3 py-3.5 text-left"
                    onClick={() => {
                      if (item.children) {
                        setMobileSubOpen(mobileSubOpen === item.label ? null : item.label);
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.children) e.preventDefault();
                        else setMobileOpen(false);
                      }}
                      className="text-sm font-medium text-brand-black"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <HiChevronDown
                        className={`h-4 w-4 transition-transform ${mobileSubOpen === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {item.children && mobileSubOpen === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pb-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-6 py-2 text-sm text-brand-grey-700 hover:bg-brand-grey-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="border-t border-black/5 p-4">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full">
                Request Quote
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur border-b border-black/5 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container-x">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span
                className={`h-display text-xl tracking-tight transition-colors ${scrolled ? "text-brand-black" : "text-white"}`}
              >
                SPL <span className="text-brand-red">PISTON</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpenMenu(null)}>
              {NAV.map((item) => (
                <div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.label)}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      scrolled ? "text-brand-charcoal hover:bg-brand-grey-50" : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                    {item.children && <HiChevronDown className="h-3.5 w-3.5 opacity-60" />}
                  </Link>

                  <AnimatePresence>
                    {item.children && openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full pt-3 w-72"
                      >
                        <div className="rounded-2xl border border-black/5 bg-white p-3 shadow-xl">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block rounded-xl px-4 py-2.5 hover:bg-brand-grey-50 transition-colors"
                            >
                              <p className="text-sm font-medium text-brand-black">{child.label}</p>
                              {child.blurb && <p className="text-xs text-brand-grey-500 mt-0.5">{child.blurb}</p>}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact" className="btn-primary">
                Request Quote
              </Link>
            </div>

            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden rounded-full p-2 ${scrolled ? "text-brand-black" : "text-white"}`}
            >
              <HiOutlineMenu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
