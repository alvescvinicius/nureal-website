import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { features } from "@/lib/site-config";

type FeatureGridProps = {
  tone?: "default" | "surface";
};

export function FeatureGrid({ tone = "default" }: FeatureGridProps) {
  return (
    <Section id="recursos" tone={tone}>
      <SectionHeading
        eyebrow="Recursos"
        title="Tudo que você precisa para trabalhar com bancos de dados"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <h3>{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
