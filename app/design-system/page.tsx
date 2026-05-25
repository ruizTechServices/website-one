import {
  CheckCircle2,
  Download,
  FileText,
  Printer,
  Save,
  Search,
  Sparkles,
} from "lucide-react";

import { AppBadge } from "@/components/primitives/app-badge";
import { AppButton } from "@/components/primitives/app-button";
import { AppCard } from "@/components/primitives/app-card";
import { AppInput } from "@/components/primitives/app-input";
import { AppSelect } from "@/components/primitives/app-select";
import { AppLogo } from "@/components/atoms/app-logo";
import { DifficultyChip } from "@/components/atoms/difficulty-chip";
import { GradeChip } from "@/components/atoms/grade-chip";
import { IconBubble } from "@/components/atoms/icon-bubble";
import { MetricNumber } from "@/components/atoms/metric-number";
import { ModeChip } from "@/components/atoms/mode-chip";
import { PdfFileIcon } from "@/components/atoms/pdf-file-icon";
import { StatusDot } from "@/components/atoms/status-dot";
import {
  appBadgeExamples,
  appButtonExamples,
  colorTokens,
  difficultyOptions,
  gradeOptions,
  iconBubbleExamples,
  metricExamples,
  modeOptions,
  selectOptions,
  worksheetPreviewItems,
} from "@/lib/constants/design-system";

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-surface-app text-text-primary">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8 lg:px-8">
        <header className="flex flex-col gap-5 border-b border-border-soft pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <AppLogo />
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold leading-tight tracking-normal text-text-primary md:text-4xl">
                TinySheets design system foundation
              </h1>
              <p className="mt-3 text-base leading-7 text-text-secondary">
                Tokens, primitives, atoms, and worksheet preview language for a
                professional K-2 PDF worksheet generator.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <AppBadge variant="success">Foundation</AppBadge>
            <AppBadge variant="pdf">PDF-first</AppBadge>
            <AppBadge variant="purple">K-2</AppBadge>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metricExamples.map((metric) => (
            <AppCard key={metric.label} variant="dashboard">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-semibold text-text-secondary">
                    {metric.label}
                  </span>
                  <MetricNumber
                    value={metric.value}
                    trend={metric.trend}
                    subtitle={metric.subtitle}
                  />
                </div>
                <IconBubble icon={metric.icon} color={metric.color} />
              </div>
            </AppCard>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <AppCard variant="default" className="gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold tracking-normal">
                Theme tokens
              </h2>
              <p className="text-sm leading-6 text-text-secondary">
                Semantic colors map dashboard actions, grade cues, auth accents,
                PDF exports, and worksheet-safe surfaces.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {colorTokens.map((token) => (
                <div
                  key={token.name}
                  className="flex items-center gap-3 rounded-xl border border-border-soft bg-surface-card p-3"
                >
                  <span
                    aria-hidden="true"
                    className={`size-10 rounded-xl ${token.className}`}
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold">{token.name}</div>
                    <div className="text-xs leading-5 text-text-muted">
                      {token.usage}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AppCard>

          <AppCard variant="default" className="gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold tracking-normal">Primitives</h2>
              <p className="text-sm leading-6 text-text-secondary">
                App wrappers hold product variants while shadcn/ui remains the
                base component layer.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {appButtonExamples.map((button) => (
                <AppButton key={button.label} variant={button.variant}>
                  {button.label}
                </AppButton>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {appBadgeExamples.map((badge) => (
                <AppBadge key={badge.label} variant={badge.variant}>
                  {badge.label}
                </AppBadge>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-[1fr_220px]">
              <div className="relative">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                />
                <AppInput
                  className="pl-10"
                  aria-label="Search worksheets"
                  placeholder="Search worksheets..."
                />
              </div>
              <AppSelect
                defaultValue="addition-within-10"
                options={selectOptions}
                placeholder="Select skill"
              />
            </div>
          </AppCard>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <AppCard variant="default" className="gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold tracking-normal">Atoms</h2>
              <p className="text-sm leading-6 text-text-secondary">
                Chips, status marks, icons, and PDF atoms establish repeatable
                visual grammar before larger dashboard sections are assembled.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-text-secondary">
                  Grade chips
                </span>
                <div className="flex flex-wrap gap-3">
                  {gradeOptions.map((grade) => (
                    <GradeChip
                      key={grade.value}
                      value={grade.value}
                      selected={grade.value === "kindergarten"}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-text-secondary">
                  Mode chips
                </span>
                <div className="flex flex-wrap gap-3">
                  {modeOptions.map((mode) => (
                    <ModeChip
                      key={mode.value}
                      value={mode.value}
                      selected={mode.value === "math"}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-text-secondary">
                  Difficulty chips
                </span>
                <div className="flex flex-wrap gap-3">
                  {difficultyOptions.map((difficulty) => (
                    <DifficultyChip
                      key={difficulty.value}
                      value={difficulty.value}
                      selected={difficulty.value === "easy"}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {iconBubbleExamples.map((item) => (
                  <IconBubble
                    key={item.label}
                    icon={item.icon}
                    color={item.color}
                    label={item.label}
                  />
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-5 rounded-xl border border-border-soft bg-surface-muted p-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <StatusDot status="success" label="Operational" />
                  Operational
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <StatusDot status="warning" label="Needs attention" />
                  Needs attention
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <StatusDot status="danger" label="Offline" />
                  Offline
                </div>
              </div>
            </div>
          </AppCard>

          <AppCard variant="default" className="gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold tracking-normal">
                Worksheet preview language
              </h2>
              <p className="text-sm leading-6 text-text-secondary">
                The PDF surface stays spacious, readable, one-page, and
                child-friendly while the app chrome stays professional.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1fr_220px]">
              <AppCard variant="worksheet" className="gap-5">
                <div className="flex items-center justify-between gap-4 text-xs font-semibold text-text-secondary">
                  <span>Name: __________________</span>
                  <span>Date: ____________</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      Addition within 10
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      Add the two numbers. Write the correct answer.
                    </p>
                  </div>
                  <div className="hidden rounded-2xl bg-success-soft p-4 text-success sm:block">
                    <Sparkles aria-hidden="true" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {worksheetPreviewItems.map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-6 text-sm font-semibold">
                        {index + 1}.
                      </span>
                      <span className="flex-1 text-lg font-semibold">
                        {item}
                      </span>
                      <span
                        aria-hidden="true"
                        className="size-10 rounded-lg border-2 border-text-muted/40 bg-white"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-2 rounded-xl bg-success-soft px-4 py-3 text-center text-xs font-medium text-success">
                  Generated by TinySheets
                </div>
              </AppCard>

              <div className="flex flex-col gap-3">
                <AppButton variant="primary">
                  <FileText data-icon="inline-start" />
                  Generate PDF
                </AppButton>
                <AppButton variant="pdf">
                  <Download data-icon="inline-start" />
                  Download PDF
                </AppButton>
                <AppButton variant="outline">
                  <Printer data-icon="inline-start" />
                  Print
                </AppButton>
                <AppButton variant="secondary">
                  <Save data-icon="inline-start" />
                  Save Worksheet
                </AppButton>
                <div className="mt-2 flex items-center gap-3 rounded-xl border border-border-soft bg-surface-muted p-3">
                  <PdfFileIcon />
                  <div>
                    <div className="text-sm font-semibold">
                      addition-within-10.pdf
                    </div>
                    <div className="text-xs text-text-muted">
                      One-page PDF
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-success">
                  <CheckCircle2 aria-hidden="true" />
                  Exactly one page
                </div>
              </div>
            </div>
          </AppCard>
        </section>
      </div>
    </main>
  );
}
