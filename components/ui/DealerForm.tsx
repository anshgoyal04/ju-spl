"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const TIERS = ["Dealer", "Distributor", "Export Partner"];

export default function DealerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tier, setTier] = useState("Dealer");

  if (submitted) {
    return (
      <div className="card-surface p-8 text-center">
        <h3 className="h-display text-xl text-brand-black">Application received</h3>
        <p className="mt-2 text-sm text-brand-grey-700">Our partnerships team will review your application and reach out within 2–3 business days.</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject: `New ${tier} application — SPL Piston website`,
      from_name: formData.get("full_name"),
      name: formData.get("full_name"),
      business_name: formData.get("business_name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      location: formData.get("location"),
      partnership_type: tier,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or reach us on WhatsApp.");
      }
    } catch {
      setError("Network error. Please try again or reach us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      id="apply"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
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
        <input name="full_name" required placeholder="Full name *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input name="business_name" required placeholder="Business / company name *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input name="phone" required placeholder="Phone number *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input name="email" required type="email" placeholder="Email address *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input name="location" required placeholder="City / country of operation *" className="sm:col-span-2 rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <textarea name="message" placeholder="Tell us about your current business, territory and order volumes" rows={4} className="sm:col-span-2 rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
      </div>

      {error && <p className="mt-4 text-sm text-brand-red">{error}</p>}

      <button type="submit" disabled={loading} className="btn-primary mt-6 w-full sm:w-auto disabled:opacity-60">
        {loading ? "Submitting…" : `Submit ${tier.toLowerCase()} application`}
      </button>
    </motion.form>
  );
}