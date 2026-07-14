"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const TIERS = ["Dealer", "Distributor", "Export Partner"];

export default function DealerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [tier, setTier] = useState("Dealer");

  if (submitted) {
    return (
      <div className="card-surface p-8 text-center">
        <h3 className="h-display text-xl text-brand-black">Application received</h3>
        <p className="mt-2 text-sm text-brand-grey-700">Our partnerships team will review your application and reach out within 2–3 business days.</p>
      </div>
    );
  }

  return (
    <motion.form
      id="apply"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="card-surface p-6 sm:p-8"
    >
      <h3 className="h-display text-xl text-brand-black">Partner application</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {TIERS.map((t) => (
          <button
            type="button"
            key={t}
            onClick={() => setTier(t)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              tier === t ? "bg-brand-red text-white" : "bg-brand-grey-50 text-brand-grey-700 hover:bg-brand-grey-100"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input required placeholder="Full name *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input required placeholder="Business / company name *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input required placeholder="Phone number *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input required type="email" placeholder="Email address *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input required placeholder="City / country of operation *" className="sm:col-span-2 rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <textarea placeholder="Tell us about your current business, territory and order volumes" rows={4} className="sm:col-span-2 rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
      </div>
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Submit {tier.toLowerCase()} application
      </button>
    </motion.form>
  );
}
