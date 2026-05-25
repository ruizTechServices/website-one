import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const appButtonVariants = cva(
  "rounded-xl shadow-none focus-visible:ring-primary/25",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/85",
        secondary:
          "bg-primary-soft text-primary hover:bg-primary-soft/80 border-border-soft",
        outline:
          "border-border-soft bg-surface-card text-text-secondary hover:bg-surface-muted hover:text-text-primary",
        ghost:
          "bg-transparent text-text-secondary hover:bg-surface-muted hover:text-text-primary",
        success:
          "bg-success text-success-foreground hover:bg-success/90 focus-visible:ring-success/25",
        danger:
          "bg-danger text-danger-foreground hover:bg-danger/90 focus-visible:ring-danger/25",
        pdf: "bg-danger text-danger-foreground hover:bg-danger/90 focus-visible:ring-danger/25",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-sm",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const baseVariantByAppVariant = {
  primary: "default",
  secondary: "outline",
  outline: "outline",
  ghost: "ghost",
  success: "default",
  danger: "destructive",
  pdf: "default",
} as const;

const baseSizeByAppSize = {
  sm: "sm",
  md: "default",
  lg: "lg",
  icon: "icon",
} as const;

type AppButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "variant" | "size"
> &
  VariantProps<typeof appButtonVariants>;

function AppButton({
  className,
  variant = "primary",
  size = "md",
  ...props
}: AppButtonProps) {
  const resolvedVariant = variant ?? "primary";
  const resolvedSize = size ?? "md";

  return (
    <Button
      variant={baseVariantByAppVariant[resolvedVariant]}
      size={baseSizeByAppSize[resolvedSize]}
      className={cn(
        appButtonVariants({ variant: resolvedVariant, size: resolvedSize }),
        className
      )}
      {...props}
    />
  );
}

export { AppButton, appButtonVariants };
