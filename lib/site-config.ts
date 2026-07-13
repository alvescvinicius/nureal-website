import type {
  BenefitItem,
  FeatureItem,
  FutureProduct,
  NavLink,
  RoadmapItem,
} from "@/types";

// TODO: substituir todo o conteúdo abaixo por copy definitiva da Nureal.

export const siteConfig = {
  name: "Nureal",
  tagline: "A Database IDE moderna para times que levam dados a sério.",
  description:
    "Nureal é o ecossistema de ferramentas para engenharia de software da Nureal, começando pela Database IDE.",
};

export const navLinks: NavLink[] = [
  { label: "Produto", href: "/#produto" },
  { label: "Recursos", href: "/features" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Docs", href: "/docs" },
];

export const benefits: BenefitItem[] = [
  {
    title: "Performance real",
    description:
      "Consultas e navegação em bancos grandes sem travar sua linha de raciocínio.",
  },
  {
    title: "Organização por padrão",
    description:
      "Conexões, schemas e queries organizados de um jeito que faz sentido para o time.",
  },
  {
    title: "Interface sem ruído",
    description:
      "Menos cliques, menos poluição visual, mais foco no que importa: os dados.",
  },
  {
    title: "Feita para times",
    description:
      "Compartilhamento de queries e configurações pensado para trabalho em equipe.",
  },
];

export const features: FeatureItem[] = [
  {
    title: "Editor de SQL inteligente",
    description:
      "Autocomplete consciente de schema, atalhos de teclado e formatação automática.",
  },
  {
    title: "Explorador de schema",
    description:
      "Navegue entre tabelas, relações e índices sem perder o contexto da query.",
  },
  {
    title: "Múltiplas conexões",
    description:
      "Gerencie diferentes bancos e ambientes em um único lugar, com troca instantânea.",
  },
  {
    title: "Histórico e versionamento",
    description:
      "Toda query executada fica registrada e pode ser recuperada depois.",
  },
  {
    title: "Exportação de resultados",
    description:
      "Exporte resultados em múltiplos formatos para análises fora da IDE.",
  },
  {
    title: "Temas claro e escuro",
    description:
      "Interface adaptada para longas sessões de trabalho, de dia ou de noite.",
  },
];

export const roadmap: RoadmapItem[] = [
  {
    quarter: "Q2 2026",
    status: "concluido",
    title: "Lançamento da Database IDE",
    description: "Primeira versão pública, com suporte aos principais bancos relacionais.",
  },
  {
    quarter: "Q3 2026",
    status: "em-andamento",
    title: "Colaboração em tempo real",
    description: "Compartilhamento de queries e sessões entre membros do time.",
  },
  {
    quarter: "Q4 2026",
    status: "planejado",
    title: "Integrações com CI/CD",
    description: "Rodar migrações e validações de schema direto do pipeline.",
  },
  {
    quarter: "2027",
    status: "planejado",
    title: "Suporte a bancos não relacionais",
    description: "Expansão do ecossistema para novos tipos de banco de dados.",
  },
];

export const futureProducts: FutureProduct[] = [
  {
    name: "Nureal Cloud",
    description: "Ambientes de banco de dados gerenciados, integrados à IDE.",
    status: "planejado",
  },
  {
    name: "Nureal Insights",
    description: "Observabilidade e análise de performance de queries em produção.",
    status: "em-breve",
  },
];
