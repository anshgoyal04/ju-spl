"use client";
import PasswordInput from "@/components/ui/PasswordInput";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GiFactory } from "react-icons/gi";
import { HiArrowRight, HiOutlineMail } from "react-icons/hi";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const supabase = createClient();

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: String(form.get("email")),
      password,
    });

    setLoading(false);
    if (signInError) {
      setError(signInError.message);
      return;
    }
    router.push("/dashboard");
    router.refresh();
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
            Welcome back. Your orders and pricing are one login away.
          </h2>
          <p className="mt-4 text-white/60 max-w-sm">
            Log in to pick up right where you left off — search the full catalog and manage your order list.
          </p>
        </div>
        <p className="relative text-xs text-white/40">© {new Date().getFullYear()} Jindal Udyog</p>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <p className="eyebrow lg:hidden mb-2">SPL Piston</p>
          <h1 className="h-display text-2xl text-brand-black sm:text-3xl">Log in to your account</h1>
          <p className="mt-2 text-sm text-brand-grey-700">Access your dealer or distributor dashboard.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="relative">
              <HiOutlineMail className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-brand-grey-400" />
              <input name="email" type="email" required placeholder="Email address" className="w-full rounded-xl border border-black/10 py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-red" />
            </div>

            <PasswordInput name="password" placeholder="Password" value={password} onChange={setPassword} />

            {error && <p className="text-sm text-brand-red">{error}</p>}

            <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60">
              {loading ? "Logging in…" : <>Log in <HiArrowRight /></>}
            </button>

            <p className="text-center text-sm text-brand-grey-500">
              New partner?{" "}
              <Link href="/signup" className="font-semibold text-brand-red">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}