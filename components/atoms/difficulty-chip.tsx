import { Gauge, Smile, Trophy } from "lucide-react";

import { cn } from "@/lib/utils";

const difficultyChipMeta = {
  easy: {
    label: "Easy",
    icon: Smile,
    selected: "border-success bg-success-soft text-success",
  },
  medium: {
    label: "Medium",
    icon: Gauge,
    selected: "border-primary bg-primary-soft text-primary",
  },
  hard: {
    label: "Hard",
    icon: Trophy,
    selected: "border-purple bg-purple-soft text-purple",
  },
} as const;

type DifficultyChipProps = {
  value: keyof typeof difficultyChipMeta;
  selected?: boolean;
  className?: string;
};

function DifficultyChip({
  value,
  selected = false,
  className,
}: DifficultyChipProps) {
  const difficulty = difficultyChipMeta[value];
  const Icon = difficulty.icon;

  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-label={`${difficulty.label} difficulty`}
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border-soft bg-surface-card px-4 text-sm font-semibold text-text-secondary transition hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary/20",
        selected ? difficulty.selected : null,
        className
      )}
    >
      <Icon aria-hidden="true" />
      {difficulty.label}
    </button>
  );
}

export { DifficultyChip, difficultyChipMeta };
