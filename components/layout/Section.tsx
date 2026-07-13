import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "dark";
};

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-background",
  surface: "bg-surface",
  dark: "bg-dark text-dark-foreground",
};

export function Section({
  id,
  children,
  className = "",
  tone = "default",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${toneClasses[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
