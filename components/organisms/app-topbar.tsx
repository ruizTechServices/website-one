import type { ReactNode } from "react";
import { Bell, Search } from "lucide-react";

import { AppLogo } from "@/components/atoms/app-logo";
import { StatusDot } from "@/components/atoms/status-dot";
import { AppBadge } from "@/components/primitives/app-badge";
import { AppInput } from "@/components/primitives/app-input";

type AppTopbarProps = {
  displayName: string;
  email?: string;
  roleLabel: string;
  userMenu: ReactNode;
};

function AppTopbar({
  displayName,
  email,
  roleLabel,
  userMenu,
}: AppTopbarProps) {
  const roleVariant =
    roleLabel === "Admin" ? "admin" : roleLabel === "Tutor" ? "tutor" : "teacher";

  return (
    <header className="sticky top-0 z-20 border-b border-border-soft bg-surface-app/95 px-5 py-4 backdrop-blur lg:px-8">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between gap-4 lg:hidden">
          <AppLogo variant="compact" />
          <div>{userMenu}</div>
        </div>
        <div className="hidden min-w-0 flex-col lg:flex">
          <div className="flex items-center gap-2 text-sm font-semibold text-success">
            <StatusDot status="success" label="Signed in" />
            Signed in with Clerk
          </div>
          <h1 className="mt-1 truncate text-2xl font-bold tracking-normal text-text-primary">
            Welcome back, {displayName}
          </h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative min-w-0 sm:w-72">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted"
            />
            <AppInput
              aria-label="Search dashboard"
              className="h-10 pl-10"
              placeholder="Search worksheets..."
            />
          </div>
          <button
            type="button"
            aria-label="Notifications"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border-soft bg-surface-card text-text-secondary transition hover:bg-surface-muted hover:text-text-primary"
          >
            <Bell aria-hidden="true" className="size-4" />
          </button>
          <div className="hidden items-center gap-3 rounded-2xl border border-border-soft bg-surface-card px-3 py-2 lg:flex">
            <div className="min-w-0 text-right">
              <div className="truncate text-sm font-semibold text-text-primary">
                {displayName}
              </div>
              {email ? (
                <div className="truncate text-xs text-text-muted">{email}</div>
              ) : null}
            </div>
            <AppBadge variant={roleVariant}>{roleLabel}</AppBadge>
            {userMenu}
          </div>
        </div>
      </div>
    </header>
  );
}

export { AppTopbar };
