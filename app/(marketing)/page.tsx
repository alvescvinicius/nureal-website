import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Benefits } from "@/components/sections/Benefits";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Roadmap } from "@/components/sections/Roadmap";
import { FutureProducts } from "@/components/sections/FutureProducts";
import { DownloadCta } from "@/components/sections/DownloadCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProductShowcase />
      <Benefits />
      <FeatureGrid tone="default" />
      <Roadmap tone="surface" />
      <FutureProducts />
      <DownloadCta />
    </>
  );
}
