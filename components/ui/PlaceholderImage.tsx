import { IconType } from "react-icons";

type Props = {
  icon?: IconType;
  label?: string;
  tone?: "dark" | "light" | "red";
  className?: string;
};

const TONES: Record<string, string> = {
  dark: "bg-gradient-to-br from-brand-charcoal to-black text-white/70",
  light: "bg-gradient-to-br from-brand-grey-50 to-brand-grey-100 text-brand-grey-500",
  red: "bg-gradient-to-br from-brand-red to-brand-red-dark text-white/80",
};

export default function PlaceholderImage({ icon: Icon, label, tone = "light", className = "" }: Props) {
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden ${TONES[tone]} ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(45deg,currentColor_0,currentColor_1px,transparent_1px,transparent_14px)]" />
      {Icon && <Icon className="relative h-10 w-10 opacity-80" aria-hidden />}
      {label && <span className="relative text-xs font-medium tracking-wide uppercase font-[var(--font-label)]">{label}</span>}
    </div>
  );
}
