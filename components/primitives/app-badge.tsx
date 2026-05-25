import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const appBadgeVariants = cva("h-6 rounded-full px-2.5 font-medium", {
  variants: {
    variant: {
      default: "bg-primary-soft text-primary",
      success: "bg-success-soft text-success",
      purple: "bg-purple-soft text-purple",
      warning: "bg-warning-soft text-warning-foreground",
      danger: "bg-danger-soft text-danger",
      teacher: "bg-success-soft text-success",
      tutor: "bg-purple-soft text-purple",
      admin: "bg-primary-soft text-primary",
      plan: "bg-warning-soft text-warning-foreground",
      pdf: "bg-danger-soft text-danger",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type AppBadgeProps = Omit<React.ComponentProps<typeof Badge>, "variant"> &
  VariantProps<typeof appBadgeVariants>;

function AppBadge({
  className,
  variant = "default",
  ...props
}: AppBadgeProps) {
  const resolvedVariant = variant ?? "default";

  return (
    <Badge
      variant="secondary"
      className={cn(appBadgeVariants({ variant: resolvedVariant }), className)}
      {...props}
    />
  );
}

export { AppBadge, appBadgeVariants };
