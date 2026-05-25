"use client";

import { usePathname } from "next/navigation";

import { AppLogo } from "@/components/atoms/app-logo";
import { StatusDot } from "@/components/atoms/status-dot";
import { AppBadge } from "@/components/primitives/app-badge";
import { SidebarNavItem } from "@/components/molecules/sidebar-nav-item";
import { dashboardNavItems } from "@/lib/constants/dashboard-shell";

function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-72 shrink-0 flex-col border-r border-border-soft bg-surface-card px-5 py-6 lg:flex">
      <AppLogo className="mb-8" />
      <nav aria-label="Dashboard navigation" className="flex flex-col gap-1">
        {dashboardNavItems.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <SidebarNavItem key={item.href} {...item} active={active} />
          );
        })}
      </nav>
      <div className="mt-auto rounded-2xl border border-border-soft bg-surface-muted p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
            <StatusDot status="success" label="Authentication active" />
            Auth active
          </div>
          <AppBadge variant="purple">Clerk</AppBadge>
        </div>
        <p className="mt-3 text-xs leading-5 text-text-muted">
          Dashboard access is gated by Clerk. Worksheet generation and saved
          data arrive in later specs.
        </p>
      </div>
    </aside>
  );
}

export { AppSidebar };
