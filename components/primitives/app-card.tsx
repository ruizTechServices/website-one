import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const appCardVariants = cva(
  "rounded-2xl border border-border-soft bg-surface-card text-text-primary shadow-soft-card",
  {
    variants: {
      variant: {
        default: "p-5",
        soft: "bg-surface-muted p-5 shadow-none",
        interactive:
          "p-5 transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-soft-panel",
        dashboard: "p-5 shadow-soft-card",
        worksheet: "rounded-xl bg-white p-4 shadow-soft-card",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type AppCardProps = React.ComponentProps<typeof Card> &
  VariantProps<typeof appCardVariants>;

function AppCard({ className, variant = "default", ...props }: AppCardProps) {
  const resolvedVariant = variant ?? "default";

  return (
    <Card
      className={cn(appCardVariants({ variant: resolvedVariant }), className)}
      {...props}
    />
  );
}

export { AppCard, appCardVariants };
