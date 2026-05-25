import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  WandSparkles,
} from "lucide-react";

import { IconBubble } from "@/components/atoms/icon-bubble";
import { MetricNumber } from "@/components/atoms/metric-number";
import { StatusDot } from "@/components/atoms/status-dot";
import { AppBadge } from "@/components/primitives/app-badge";
import { AppButton, appButtonVariants } from "@/components/primitives/app-button";
import { AppCard } from "@/components/primitives/app-card";
import { authShellStatusItems } from "@/lib/constants/dashboard-shell";
import { cn } from "@/lib/utils";

const dashboardMetrics = [
  {
    label: "Auth status",
    value: "Ready",
    subtitle: "Clerk protected",
    icon: ShieldCheck,
    color: "purple",
  },
  {
    label: "Worksheet engine",
    value: "Next",
    subtitle: "SPEC-004",
    icon: WandSparkles,
    color: "blue",
  },
  {
    label: "Saved worksheets",
    value: "Later",
    subtitle: "No data layer yet",
    icon: FileText,
    color: "gray",
  },
] as const;

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="grid gap-4 xl:grid-cols-3">
        {dashboardMetrics.map((metric) => (
          <AppCard key={metric.label} variant="dashboard">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-text-secondary">
                  {metric.label}
                </span>
                <MetricNumber
                  value={metric.value}
                  subtitle={metric.subtitle}
                />
              </div>
              <IconBubble icon={metric.icon} color={metric.color} />
            </div>
          </AppCard>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <AppCard variant="default" className="gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <AppBadge variant="success">Protected route</AppBadge>
              <AppBadge variant="purple">Clerk-first</AppBadge>
            </div>
            <h2 className="text-xl font-bold tracking-normal">
              Auth shell is ready
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-text-secondary">
              This dashboard is intentionally a shell. Clerk owns sessions and
              identity now; worksheet generation, saved worksheets, PDF export
              history, Supabase records, and payments are still later specs.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {authShellStatusItems.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border-soft bg-surface-muted p-4"
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <StatusDot
                    status={item.tone === "purple" ? "neutral" : "success"}
                    label={item.status}
                  />
                  {item.label}
                </div>
                <div className="mt-2 text-xs font-medium text-text-muted">
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </AppCard>

        <AppCard variant="default" className="gap-5">
          <div className="flex items-start gap-3">
            <IconBubble icon={WandSparkles} color="blue" />
            <div>
              <h2 className="text-xl font-bold tracking-normal">
                Generate worksheet
              </h2>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                The protected route exists now. The actual worksheet engine is
                the next scoped implementation.
              </p>
            </div>
          </div>
          <Link
            href="/dashboard/generate"
            className={cn(appButtonVariants({ variant: "primary", size: "lg" }))}
          >
            <WandSparkles data-icon="inline-start" />
            Open route shell
          </Link>
        </AppCard>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <AppCard variant="default" className="gap-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold tracking-normal">
              Recent worksheets
            </h2>
            <AppBadge variant="warning">Not wired</AppBadge>
          </div>
          <div className="rounded-xl border border-dashed border-border-soft bg-surface-muted p-5 text-sm leading-6 text-text-secondary">
            No worksheet records are stored yet. Supabase and dashboard data
            wiring remain out of SPEC-003.
          </div>
        </AppCard>
        <AppCard variant="default" className="gap-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold tracking-normal">PDF exports</h2>
            <AppBadge variant="pdf">Future</AppBadge>
          </div>
          <div className="rounded-xl border border-dashed border-border-soft bg-surface-muted p-5 text-sm leading-6 text-text-secondary">
            PDF export history is intentionally empty until the PDF generation
            and data-layer specs add real records.
          </div>
        </AppCard>
      </section>

      <div className="flex flex-wrap gap-3">
        <AppButton variant="secondary">
          <CheckCircle2 data-icon="inline-start" />
          Clerk session active
        </AppButton>
        <AppButton variant="outline">
          <Clock3 data-icon="inline-start" />
          SPEC-004 next
        </AppButton>
      </div>
    </div>
  );
}
