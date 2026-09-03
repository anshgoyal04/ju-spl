"use client";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiChevronDown, HiOutlineLogout } from "react-icons/hi";

export default function UserAvatarMenu({ fullName }: { fullName: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const initial = fullName?.trim()?.[0]?.toUpperCase() || "?";

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-black/10 py-1.5 pl-1.5 pr-3 hover:bg-brand-grey-50"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-sm font-semibold text-white">
          {initial}
        </span>
        <span className="text-sm font-medium text-brand-black hidden sm:inline">{fullName}</span>
        <HiChevronDown className="h-3.5 w-3.5 text-brand-grey-500" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-20 mt-2 w-44 rounded-2xl border border-black/5 bg-white p-2 shadow-xl">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-brand-red hover:bg-brand-grey-50"
            >
              <HiOutlineLogout className="h-4 w-4" /> Log out
            </button>
          </div>
        </>
      )}
    </div>
  );
}