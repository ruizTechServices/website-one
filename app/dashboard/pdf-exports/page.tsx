import { FileArchive } from "lucide-react";

import { IconBubble } from "@/components/atoms/icon-bubble";
import { AppBadge } from "@/components/primitives/app-badge";
import { AppCard } from "@/components/primitives/app-card";

export default function PdfExportsRouteShellPage() {
  return (
    <AppCard variant="default" className="gap-5">
      <div className="flex items-start gap-3">
        <IconBubble icon={FileArchive} color="red" />
        <div>
          <AppBadge variant="pdf">PDF shell</AppBadge>
          <h1 className="mt-3 text-2xl font-bold tracking-normal">
            PDF Exports
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
            This protected route reserves space for future one-page PDF export
            history. SPEC-003 does not implement PDF rendering, downloads, or
            storage.
          </p>
        </div>
      </div>
      <div className="rounded-xl border border-dashed border-border-soft bg-surface-muted p-6 text-sm leading-6 text-text-secondary">
        PDF export records will appear after the PDF generation and dashboard
        data specs define the underlying behavior.
      </div>
    </AppCard>
  );
}
