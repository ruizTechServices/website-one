import type { ReactNode } from "react";

import { AppSidebar } from "@/components/organisms/app-sidebar";
import { AppTopbar } from "@/components/organisms/app-topbar";

type DashboardShellProps = {
  children: ReactNode;
  displayName: string;
  email?: string;
  roleLabel: string;
  userMenu: ReactNode;
};

function DashboardShell({
  children,
  displayName,
  email,
  roleLabel,
  userMenu,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-surface-app text-text-primary">
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <AppTopbar
            displayName={displayName}
            email={email}
            roleLabel={roleLabel}
            userMenu={userMenu}
          />
          <main className="flex-1 px-5 py-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

export { DashboardShell };
