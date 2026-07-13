import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { RoadmapStatusBadge } from "@/components/ui/RoadmapStatusBadge";
import { roadmap } from "@/lib/site-config";

type RoadmapProps = {
  tone?: "default" | "surface";
};

export function Roadmap({ tone = "surface" }: RoadmapProps) {
  return (
    <Section id="roadmap" tone={tone}>
      <SectionHeading eyebrow="Roadmap" title="Para onde estamos indo" />

      <ol className="mt-12 flex flex-col gap-8 border-l border-border pl-8">
        {roadmap.map((item) => (
          <li key={item.title} className="relative">
            <span
              className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-green"
              aria-hidden="true"
            />
            <p className="text-eyebrow">{item.quarter}</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h3>{item.title}</h3>
              <RoadmapStatusBadge status={item.status} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
