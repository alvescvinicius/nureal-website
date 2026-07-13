import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Documentação",
  description: "Documentação da Nureal Database IDE.",
};

// TODO: substituir por documentação real, possivelmente em uma seção dedicada.
const docSections = [
  { title: "Primeiros passos", description: "Instalação e configuração inicial da IDE." },
  { title: "Conexões", description: "Como conectar seus bancos de dados." },
  { title: "Editor de queries", description: "Atalhos, autocomplete e boas práticas." },
];

export default function DocsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Documentação"
        title="Aprenda a usar a Nureal"
        description="Guias e referências para tirar o máximo proveito da Database IDE."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {docSections.map((doc) => (
            <Card key={doc.title}>
              <h3>{doc.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {doc.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
