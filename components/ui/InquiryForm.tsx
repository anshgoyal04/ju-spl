"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const INTERESTS = ["Piston Assemblies", "OEM Manufacturing", "Bulk / Export Orders", "Dealer Partnership", "Custom Requirement"];

export default function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="card-surface p-8 text-center">
        <h3 className="h-display text-xl text-brand-black">Thank you — request received</h3>
        <p className="mt-2 text-sm text-brand-grey-700">
          Our team will get back to you within one business day. For urgent requirements, reach us directly on WhatsApp.
        </p>
        <a
          href="https://wa.me/919927088886"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-5"
        >
          Message on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className={`card-surface p-6 sm:p-8 ${compact ? "" : ""}`}
    >
      <h3 className="h-display text-xl text-brand-black">Request a product quote</h3>
      <p className="mt-1 text-sm text-brand-grey-700">Tell us what you need — we'll respond with pricing and lead time.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input required placeholder="Your name *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input required placeholder="Phone number *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input required type="email" placeholder="Email address *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input required placeholder="Company / store name *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <select required defaultValue="" className="sm:col-span-2 rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red text-brand-grey-700">
          <option value="" disabled>Interested in *</option>
          {INTERESTS.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
        <textarea required placeholder="Your message *" rows={4} className="sm:col-span-2 rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
      </div>
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">Submit inquiry</button>
    </motion.form>
  );
}
