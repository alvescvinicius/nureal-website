import { Badge } from "@/components/ui/Badge";
import type { RoadmapStatus } from "@/types";

const statusLabel: Record<RoadmapStatus, string> = {
  concluido: "Concluído",
  "em-andamento": "Em andamento",
  planejado: "Planejado",
};

const statusTone: Record<RoadmapStatus, "green" | "yellow" | "neutral"> = {
  concluido: "green",
  "em-andamento": "yellow",
  planejado: "neutral",
};

export function RoadmapStatusBadge({ status }: { status: RoadmapStatus }) {
  return <Badge tone={statusTone[status]}>{statusLabel[status]}</Badge>;
}
