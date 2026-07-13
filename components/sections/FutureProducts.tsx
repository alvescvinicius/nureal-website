import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { futureProducts } from "@/lib/site-config";

export function FutureProducts() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Ecossistema"
        title="Mais produtos a caminho"
        description="A Database IDE é o primeiro passo. O ecossistema Nureal vai crescer sem exigir que você mude de ferramentas."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {futureProducts.map((product) => (
          <Card key={product.name} className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3>{product.name}</h3>
              <Badge tone={product.status === "em-breve" ? "yellow" : "neutral"}>
                {product.status === "em-breve" ? "Em breve" : "Planejado"}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {product.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
