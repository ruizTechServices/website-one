import { cn } from "@/lib/utils";

const statusDotVariants = {
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  neutral: "bg-text-muted",
} as const;

type StatusDotProps = {
  status?: keyof typeof statusDotVariants;
  label?: string;
  className?: string;
};

function StatusDot({
  status = "neutral",
  label = status,
  className,
}: StatusDotProps) {
  return (
    <span
      aria-label={label}
      className={cn(
        "inline-flex size-2.5 rounded-full ring-4 ring-current/10",
        statusDotVariants[status],
        className
      )}
    />
  );
}

export { StatusDot, statusDotVariants };
