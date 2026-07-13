import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { downloadOptions } from "@/lib/download-options";

export function DownloadOptions() {
  return (
    <Section>
      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
        {downloadOptions.map((option) => (
          <Card
            key={option.platform}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div>
              <h3>{option.platform}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {option.version}
              </p>
            </div>
            <Button href={option.href} variant="secondary" className="w-full">
              Baixar
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
