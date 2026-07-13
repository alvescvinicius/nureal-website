import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function DownloadCta() {
  return (
    <Section tone="dark">
      <div className="mx-auto max-w-xl text-center">
        <h2>Comece a usar a Nureal Database IDE hoje</h2>
        <p className="mt-4 text-dark-muted">
          Gratuita para começar. Disponível para macOS, Windows e Linux.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/download" variant="onDark">
            Baixar agora
          </Button>
        </div>
      </div>
    </Section>
  );
}
