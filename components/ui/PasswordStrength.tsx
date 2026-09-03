"use client";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";

export const PASSWORD_RULES = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "At least 1 number", test: (v: string) => /\d/.test(v) },
  { label: "At least 1 special character", test: (v: string) => /[!@#$%^&*(),.?":{}|<>_\-+=]/.test(v) },
];

export function isPasswordValid(value: string) {
  return PASSWORD_RULES.every((rule) => rule.test(value));
}

export default function PasswordStrength({ value }: { value: string }) {
  if (!value) return null;

  return (
    <ul className="space-y-1 pt-1">
      {PASSWORD_RULES.map((rule) => {
        const passed = rule.test(value);
        return (
          <li key={rule.label} className={`flex items-center gap-1.5 text-xs ${passed ? "text-green-600" : "text-brand-grey-500"}`}>
            {passed ? <HiOutlineCheckCircle className="h-3.5 w-3.5" /> : <HiOutlineXCircle className="h-3.5 w-3.5" />}
            {rule.label}
          </li>
        );
      })}
    </ul>
  );
}