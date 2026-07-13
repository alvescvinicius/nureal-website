import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { DownloadOptions } from "@/components/sections/DownloadOptions";

export const metadata: Metadata = {
  title: "Download",
  description: "Baixe a Nureal Database IDE para macOS, Windows ou Linux.",
};

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        eyebrow="Download"
        title="Baixe a Nureal Database IDE"
        description="Gratuita para começar. Escolha sua plataforma abaixo."
      />
      <DownloadOptions />
    </>
  );
}
