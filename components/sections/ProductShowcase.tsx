import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";

export function ProductShowcase() {
  return (
    <Section id="produto">
      <SectionHeading
        eyebrow="Produto"
        title="Nureal Database IDE"
        description="Uma interface rápida e organizada para explorar, consultar e entender seus bancos de dados."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <ScreenshotPlaceholder label="Screenshot: editor de queries" />
        <ScreenshotPlaceholder label="Screenshot: explorador de schema" />
      </div>
    </Section>
  );
}
