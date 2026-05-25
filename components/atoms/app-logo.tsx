import { FileText } from "lucide-react";

import { cn } from "@/lib/utils";

type AppLogoProps = {
  variant?: "full" | "mark-only" | "compact";
  className?: string;
};

function AppLogo({ variant = "full", className }: AppLogoProps) {
  const showText = variant !== "mark-only";
  const showTagline = variant === "full";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft-card">
        <FileText aria-hidden="true" />
      </div>
      {showText ? (
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-none text-primary">
            TinySheets
          </span>
          {showTagline ? (
            <span className="mt-1 text-xs font-medium text-text-muted">
              Worksheets, made tiny.
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export { AppLogo };
