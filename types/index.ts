export type NavLink = {
  label: string;
  href: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type BenefitItem = {
  title: string;
  description: string;
};

export type RoadmapStatus = "concluido" | "em-andamento" | "planejado";

export type RoadmapItem = {
  quarter: string;
  status: RoadmapStatus;
  title: string;
  description: string;
};

export type FutureProduct = {
  name: string;
  description: string;
  status: "em-breve" | "planejado";
};
