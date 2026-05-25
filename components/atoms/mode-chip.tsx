import { BookOpenText, Sigma } from "lucide-react";

import { cn } from "@/lib/utils";

const modeChipMeta = {
  math: {
    label: "Math",
    icon: Sigma,
    selected: "border-success bg-success-soft text-success",
  },
  vocabulary: {
    label: "Vocabulary",
    icon: BookOpenText,
    selected: "border-purple bg-purple-soft text-purple",
  },
} as const;

type ModeChipProps = {
  value: keyof typeof modeChipMeta;
  selected?: boolean;
  className?: string;
};

function ModeChip({ value, selected = false, className }: ModeChipProps) {
  const mode = modeChipMeta[value];
  const Icon = mode.icon;

  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-label={`${mode.label} worksheet mode`}
      className={cn(
        "inline-flex h-11 min-w-36 items-center justify-center gap-2 rounded-xl border border-border-soft bg-surface-card px-4 text-sm font-semibold text-text-secondary transition hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary/20",
        selected ? mode.selected : null,
        className
      )}
    >
      <Icon aria-hidden="true" />
      {mode.label}
    </button>
  );
}

export { ModeChip, modeChipMeta };
