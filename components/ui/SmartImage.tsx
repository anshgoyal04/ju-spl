"use client";
import { useState } from "react";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import { GiGears } from "react-icons/gi";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackTone?: "dark" | "light" | "red";
  fit?: "cover" | "contain";
};

export default function SmartImage({ src, alt, className = "", fallbackTone = "light", fit = "cover" }: Props) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <PlaceholderImage icon={GiGears} tone={fallbackTone} label={alt} className={className} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      onError={() => setFailed(true)}
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  );
}