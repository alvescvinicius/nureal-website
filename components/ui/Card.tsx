import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-background p-6 shadow-soft-sm transition-shadow duration-150 hover:shadow-soft-md ${className}`}
    >
      {children}
    </div>
  );
}
