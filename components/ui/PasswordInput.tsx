"use client";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineLockClosed } from "react-icons/hi";

export default function PasswordInput({
  name,
  placeholder,
  value,
  onChange,
  minLength,
}: {
  name: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  minLength?: number;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <HiOutlineLockClosed className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-brand-grey-400" />
      <input
        name={name}
        type={visible ? "text" : "password"}
        required
        minLength={minLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-black/10 py-3 pl-11 pr-11 text-sm outline-none focus:border-brand-red"
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Hide password" : "Show password"}
        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-grey-400 hover:text-brand-black"
      >
        {visible ? <HiOutlineEyeOff className="h-4.5 w-4.5" /> : <HiOutlineEye className="h-4.5 w-4.5" />}
      </button>
    </div>
  );
}