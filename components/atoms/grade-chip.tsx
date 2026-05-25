import { BookOpenText, Smile, Star } from "lucide-react";

import { cn } from "@/lib/utils";

const gradeChipMeta = {
  kindergarten: {
    label: "Kindergarten",
    icon: Smile,
    selected: "border-success bg-success-soft text-success",
  },
  "first-grade": {
    label: "1st Grade",
    icon: Star,
    selected: "border-primary bg-primary-soft text-primary",
  },
  "second-grade": {
    label: "2nd Grade",
    icon: BookOpenText,
    selected: "border-purple bg-purple-soft text-purple",
  },
} as const;

type GradeChipProps = {
  value: keyof typeof gradeChipMeta;
  selected?: boolean;
  className?: string;
};

function GradeChip({ value, selected = false, className }: GradeChipProps) {
  const grade = gradeChipMeta[value];
  const Icon = grade.icon;

  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-label={`${grade.label} grade option`}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border-soft bg-surface-card px-4 text-sm font-semibold text-text-secondary transition hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary/20",
        selected ? grade.selected : null,
        className
      )}
    >
      <Icon aria-hidden="true" />
      {grade.label}
    </button>
  );
}

export { GradeChip, gradeChipMeta };
