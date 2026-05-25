import * as React from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type AppInputProps = React.ComponentProps<typeof Input>;

function AppInput({ className, ...props }: AppInputProps) {
  return (
    <Input
      suppressHydrationWarning
      className={cn(
        "h-10 rounded-xl border-border-soft bg-surface-card px-3 text-sm text-text-primary placeholder:text-text-muted focus-visible:border-primary focus-visible:ring-primary/20",
        className
      )}
      {...props}
    />
  );
}

export { AppInput };
