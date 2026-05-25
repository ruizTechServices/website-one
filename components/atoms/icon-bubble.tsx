import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const iconBubbleColors = {
  blue: "bg-primary-soft text-primary",
  green: "bg-success-soft text-success",
  purple: "bg-purple-soft text-purple",
  red: "bg-danger-soft text-danger",
  yellow: "bg-warning-soft text-warning-foreground",
  gray: "bg-surface-muted text-text-secondary",
} as const;

type IconBubbleProps = {
  icon: LucideIcon;
  color?: keyof typeof iconBubbleColors;
  label?: string;
  className?: string;
};

function IconBubble({
  icon: Icon,
  color = "blue",
  label,
  className,
}: IconBubbleProps) {
  return (
    <span
      aria-label={label}
      className={cn(
        "inline-flex size-12 items-center justify-center rounded-full",
        iconBubbleColors[color],
        className
      )}
    >
      <Icon aria-hidden={label ? undefined : true} />
    </span>
  );
}

export { IconBubble, iconBubbleColors };
