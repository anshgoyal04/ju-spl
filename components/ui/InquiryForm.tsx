"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const INTERESTS = ["Piston Assemblies", "OEM Manufacturing", "Bulk / Export Orders", "Dealer Partnership", "Custom Requirement"];

export default function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="card-surface p-8 text-center">
        <h3 className="h-display text-xl text-brand-black">Thank you — request received</h3>
        <p className="mt-2 text-sm text-brand-grey-700">
          Our team will get back to you within one business day. For urgent requirements, reach us directly on WhatsApp.
        </p>
        <a
          href="https://wa.me/919259311378"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-5"
        >
          Message on WhatsApp
        </a>
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
      subject: "New product inquiry — SPL Piston website",
      from_name: formData.get("name"),
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      company: formData.get("company"),
      interested_in: formData.get("interest"),
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
        setError("Something went wrong. Please try again or message us on WhatsApp.");
      }
    } catch {
      setError("Network error. Please try again or message us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className={`card-surface p-6 sm:p-8 ${compact ? "" : ""}`}
    >
      <h3 className="h-display text-xl text-brand-black">Request a product quote</h3>
      <p className="mt-1 text-sm text-brand-grey-700">Tell us what you need — we'll respond with pricing and lead time.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input name="phone" required placeholder="Phone number *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input name="email" required type="email" placeholder="Email address *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <input name="company" required placeholder="Company / store name *" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
        <select name="interest" required defaultValue="" className="sm:col-span-2 rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red text-brand-grey-700">
          <option value="" disabled>Interested in *</option>
          {INTERESTS.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
        <textarea name="message" required placeholder="Your message *" rows={4} className="sm:col-span-2 rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-red" />
      </div>

      {error && <p className="mt-4 text-sm text-brand-red">{error}</p>}

      <button type="submit" disabled={loading} className="btn-primary mt-6 w-full sm:w-auto disabled:opacity-60">
        {loading ? "Sending…" : "Submit inquiry"}
      </button>
    </motion.form>
  );
}