import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getDownloadOptions } from "@/lib/download-options";

export async function DownloadOptions() {
  const downloadOptions = await getDownloadOptions();

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
              {option.version && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {option.version}
                </p>
              )}
            </div>
            <div className="flex w-full flex-col items-center gap-2">
              <Button
                href={option.primary.href}
                variant="secondary"
                className="w-full"
              >
                Baixar {option.primary.label}
              </Button>
              {option.secondary && (
                <a
                  href={option.secondary.href}
                  className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                >
                  ou {option.secondary.label}
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
