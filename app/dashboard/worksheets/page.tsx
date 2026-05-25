import { FileText } from "lucide-react";

import { IconBubble } from "@/components/atoms/icon-bubble";
import { AppBadge } from "@/components/primitives/app-badge";
import { AppCard } from "@/components/primitives/app-card";

export default function WorksheetsRouteShellPage() {
  return (
    <AppCard variant="default" className="gap-5">
      <div className="flex items-start gap-3">
        <IconBubble icon={FileText} color="gray" />
        <div>
          <AppBadge variant="warning">Data layer later</AppBadge>
          <h1 className="mt-3 text-2xl font-bold tracking-normal">
            My Worksheets
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
            This protected route is ready for future saved worksheet records.
            SPEC-003 does not add Supabase tables, persistence, or worksheet
            generation.
          </p>
        </div>
      </div>
      <div className="rounded-xl border border-dashed border-border-soft bg-surface-muted p-6 text-sm leading-6 text-text-secondary">
        No saved worksheets are displayed until a later data-layer spec wires
        authenticated Clerk users to worksheet records.
      </div>
    </AppCard>
  );
}
