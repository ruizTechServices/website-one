import type { ReactNode } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

import { AppLogo } from "@/components/atoms/app-logo";
import { AppBadge } from "@/components/primitives/app-badge";
import { AppCard } from "@/components/primitives/app-card";

type AuthShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

function AuthShell({ title, description, children }: AuthShellProps) {
  return (
    <main className="min-h-screen bg-surface-app text-text-primary">
      <div className="mx-auto grid min-h-screen w-full max-w-6xl gap-10 px-6 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <section className="flex flex-col gap-8">
          <AppLogo />
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold leading-tight tracking-normal md:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-7 text-text-secondary">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <AppBadge variant="purple">Clerk auth</AppBadge>
            <AppBadge variant="success">Google sign-in</AppBadge>
            <AppBadge variant="pdf">PDF-first MVP</AppBadge>
          </div>
          <AppCard variant="soft" className="max-w-xl gap-4">
            <div className="flex gap-3">
              <ShieldCheck
                aria-hidden="true"
                className="mt-0.5 size-5 text-purple"
              />
              <div>
                <h2 className="text-sm font-bold text-text-primary">
                  Protected teacher dashboard
                </h2>
                <p className="mt-1 text-sm leading-6 text-text-secondary">
                  TinySheets uses Clerk for sessions and identity. Worksheet
                  generation, PDF exports, and saved history stay behind signed
                  in dashboard routes.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 size-5 text-success"
              />
              <div>
                <h2 className="text-sm font-bold text-text-primary">
                  Ready for role metadata
                </h2>
                <p className="mt-1 text-sm leading-6 text-text-secondary">
                  Clerk public metadata will distinguish teacher, tutor, and
                  admin roles in later specs without adding another auth system.
                </p>
              </div>
            </div>
          </AppCard>
        </section>
        <section className="flex justify-center lg:justify-end">{children}</section>
      </div>
    </main>
  );
}

export { AuthShell };
