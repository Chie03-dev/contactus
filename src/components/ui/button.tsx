import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-[transform,background-color,border-color,color] duration-200 ease-standard active:scale-[0.98]";

const variants = {
  primary: "bg-accent text-accent-ink hover:bg-accent/90",
  ghost:
    "border border-line-strong bg-surface text-ink hover:border-accent hover:text-accent",
} as const;

export type ButtonVariant = keyof typeof variants;

/** Class string for buttons/anchors that are not Next links (form submit, external links). */
export function ctaClass(variant: ButtonVariant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

/** Internal anchor/route button rendered as a real link. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={ctaClass(variant, className)}>
      {children}
    </Link>
  );
}
