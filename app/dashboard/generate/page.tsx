import { FileText, WandSparkles } from "lucide-react";

import { IconBubble } from "@/components/atoms/icon-bubble";
import { AppBadge } from "@/components/primitives/app-badge";
import { AppCard } from "@/components/primitives/app-card";

export default function GenerateWorksheetRouteShellPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <AppCard variant="default" className="gap-5">
        <div className="flex items-start gap-3">
          <IconBubble icon={WandSparkles} color="blue" />
          <div>
            <AppBadge variant="purple">Protected shell</AppBadge>
            <h1 className="mt-3 text-2xl font-bold tracking-normal">
              Generate Worksheet
            </h1>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              Authenticated users can reach this route. The real K-2 math and
              vocabulary generator is intentionally reserved for SPEC-004.
            </p>
          </div>
        </div>
      </AppCard>
      <AppCard variant="worksheet" className="gap-5">
        <div className="flex items-center justify-between gap-4 text-xs font-semibold text-text-secondary">
          <span>Name: __________________</span>
          <span>Date: ____________</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary">
            Worksheet preview shell
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            One-page PDF preview behavior will be added with the worksheet and
            PDF specs.
          </p>
        </div>
        <div className="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-border-soft bg-surface-muted text-center text-sm font-medium text-text-muted">
          <div className="flex flex-col items-center gap-3">
            <FileText aria-hidden="true" className="size-8 text-primary" />
            No worksheet engine in SPEC-003
          </div>
        </div>
      </AppCard>
    </div>
  );
}
