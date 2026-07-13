import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { benefits } from "@/lib/site-config";

export function Benefits() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Por que a Nureal"
        title="Feita para quem trabalha com dados todos os dias"
        description="Cada decisão de produto prioriza velocidade, clareza e consistência."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {benefits.map((benefit) => (
          <Card key={benefit.title}>
            <h3>{benefit.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {benefit.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
