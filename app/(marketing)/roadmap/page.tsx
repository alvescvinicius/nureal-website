import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Roadmap } from "@/components/sections/Roadmap";
import { FutureProducts } from "@/components/sections/FutureProducts";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "O que já entregamos e o que vem por aí no ecossistema Nureal.",
};

export default function RoadmapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Roadmap"
        title="Para onde a Nureal está indo"
        description="Transparência sobre o que já foi entregue e o que está por vir."
      />
      <Roadmap tone="default" />
      <FutureProducts />
    </>
  );
}
