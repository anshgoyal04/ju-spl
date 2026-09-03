"use client";
import PasswordInput from "@/components/ui/PasswordInput";
import PasswordStrength, { isPasswordValid } from "@/components/ui/PasswordStrength";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useState } from "react";
import { GiFactory } from "react-icons/gi";
import { HiArrowRight, HiOutlineLocationMarker, HiOutlineMail, HiOutlineOfficeBuilding, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [partnerType, setPartnerType] = useState<"Dealer" | "Distributor">("Dealer");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!isPasswordValid(password)) {
      setError("Please meet all password requirements below.");
      return;
    }

    setLoading(true);
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email"));

    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: String(form.get("full_name")),
          company_name: String(form.get("company_name")),
          phone: String(form.get("phone")),
          city: String(form.get("city")),
          partner_type: partnerType,
        },
      },
    });

    setLoading(false);
    if (signUpError) {
      setError(signUpError.message);
      return;
    }
    setDone(true);
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden lg:flex flex-col justify-between bg-brand-black p-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(179,16,26,0.3),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:repeating-linear-gradient(90deg,white_0,white_1px,transparent_1px,transparent_40px)]" />
        <Link href="/" className="relative h-display text-xl text-white">
          SPL <span className="text-brand-red">PISTON</span>
        </Link>
        <div className="relative">
          <GiFactory className="h-10 w-10 text-brand-red" />
          <h2 className="h-display mt-6 text-3xl text-white leading-tight">
            Join 1000+ dealers and distributors already sourcing with us
          </h2>
          <p className="mt-4 text-white/60 max-w-sm">
            Create your partner account to browse the full catalog, book orders, and track your requests — all from one dashboard.
          </p>
        </div>
        <p className="relative text-xs text-white/40">© {new Date().getFullYear()} Jindal Udyog</p>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {done ? (
            <>
              <h1 className="h-display text-2xl text-brand-black">Check your email</h1>
              <p className="mt-3 text-sm text-brand-grey-700">
                We've sent a confirmation link to your email. Click it to activate your account, then come back and log in.
              </p>
              <Link href="/login" className="btn-primary mt-6 inline-flex">Go to login</Link>
            </>
          ) : (
            <>
              <p className="eyebrow lg:hidden mb-2">SPL Piston</p>
              <h1 className="h-display text-2xl text-brand-black sm:text-3xl">Create your partner account</h1>
              <p className="mt-2 text-sm text-brand-grey-700">Sign up as a dealer or distributor to book and track your own orders.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="flex gap-2">
                  {(["Dealer", "Distributor"] as const).map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setPartnerType(t)}
                      className={`flex-1 rounded-xl border py-2.5 text-sm font-medium transition-colors ${
                        partnerType === t ? "border-brand-red bg-brand-red/5 text-brand-red" : "border-black/10 text-brand-grey-700 hover:bg-brand-grey-50"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <HiOutlineUser className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-brand-grey-400" />
                  <input name="full_name" required placeholder="Full name" className="w-full rounded-xl border border-black/10 py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-red" />
                </div>

                <div className="relative">
                  <HiOutlineOfficeBuilding className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-brand-grey-400" />
                  <input name="company_name" required placeholder="Company / store name" className="w-full rounded-xl border border-black/10 py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-red" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <HiOutlinePhone className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-brand-grey-400" />
                    <input name="phone" required placeholder="Phone" className="w-full rounded-xl border border-black/10 py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-red" />
                  </div>
                  <div className="relative">
                    <HiOutlineLocationMarker className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-brand-grey-400" />
                    <input name="city" required placeholder="City" className="w-full rounded-xl border border-black/10 py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-red" />
                  </div>
                </div>

                <div className="relative">
                  <HiOutlineMail className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-brand-grey-400" />
                  <input name="email" type="email" required placeholder="Email address" className="w-full rounded-xl border border-black/10 py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-red" />
                </div>

                <div>
                  <PasswordInput name="password" placeholder="Create a password" value={password} onChange={setPassword} />
                  <PasswordStrength value={password} />
                </div>

                {error && <p className="text-sm text-brand-red">{error}</p>}

                <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60">
                  {loading ? "Creating account…" : <>Sign up <HiArrowRight /></>}
                </button>

                <p className="text-center text-sm text-brand-grey-500">
                  Already have an account?{" "}
                  <Link href="/login" className="font-semibold text-brand-red">Log in</Link>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}