import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <Section>
      <div className="animate-fade-in-up mx-auto max-w-3xl text-center">
        <Badge tone="green">Nureal Database IDE</Badge>
        <h1 className="mt-6">{siteConfig.tagline}</h1>
        <p className="text-lead mx-auto mt-6 max-w-xl">
          {siteConfig.description} Menos fricção para explorar, escrever e
          entender queries — do jeito que engenharia de dados deveria ser.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/download">Baixar gratuitamente</Button>
          <Button href="/features" variant="secondary">
            Ver recursos
          </Button>
        </div>
      </div>

      <div className="animate-fade-in mt-16">
        <ScreenshotPlaceholder label="Screenshot real da Nureal Database IDE (interface principal)" />
      </div>
    </Section>
  );
}
