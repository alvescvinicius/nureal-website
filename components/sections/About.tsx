import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

export function About() {
  return (
    <Section tone="surface">
      <div className="grid gap-12 md:grid-cols-2">
        <SectionHeading
          eyebrow="Quem somos"
          title="Um ecossistema de ferramentas para engenharia de software"
        />
        <div className="flex flex-col gap-6">
          <p className="text-lead">
            {/* TODO: copy definitiva sobre a empresa Nureal */}
            A Nureal nasceu para simplificar o trabalho de quem constrói e
            mantém sistemas orientados a dados. Começamos pela Database IDE e
            vamos expandir para novas ferramentas do mesmo ecossistema.
          </p>
          <p className="text-lead">
            O problema que resolvemos: ferramentas de banco de dados lentas,
            confusas e desconectadas do fluxo real de trabalho de engenharia.
            A Nureal existe para tirar esse atrito do caminho.
          </p>
        </div>
      </div>
    </Section>
  );
}
