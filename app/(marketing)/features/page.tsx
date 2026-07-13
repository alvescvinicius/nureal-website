import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { DownloadCta } from "@/components/sections/DownloadCta";

export const metadata: Metadata = {
  title: "Recursos",
  description: "Conheça os recursos da Nureal Database IDE.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recursos"
        title="Tudo que a Database IDE oferece"
        description="Um conjunto de ferramentas pensado para o dia a dia de quem trabalha com bancos de dados."
      />
      <FeatureGrid />
      <DownloadCta />
    </>
  );
}
