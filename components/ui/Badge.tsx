import type { ReactNode } from "react";

type BadgeTone = "green" | "yellow" | "neutral";

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
};

const toneClasses: Record<BadgeTone, string> = {
  green: "bg-accent-green-soft text-accent-green",
  yellow: "bg-accent-yellow-soft text-[#8a6a00]",
  neutral: "bg-surface-alt text-muted-foreground",
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
