import { UserButton } from "@clerk/nextjs";

import { DashboardShell } from "@/components/templates/dashboard-shell";
import { getAppUserRole, getRoleLabel } from "@/lib/auth/roles";
import { requireAuthenticatedUser } from "@/lib/auth/require-user";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, userId } = await requireAuthenticatedUser();
  const role = getAppUserRole(user?.publicMetadata);
  const email = user?.primaryEmailAddress?.emailAddress;
  const displayName =
    user?.firstName ?? user?.fullName ?? email ?? `User ${userId.slice(0, 6)}`;

  return (
    <DashboardShell
      displayName={displayName}
      email={email}
      roleLabel={getRoleLabel(role)}
      userMenu={
        <UserButton appearance={tinysheetsUserButtonAppearance} />
      }
    >
      {children}
    </DashboardShell>
  );
}

const tinysheetsUserButtonAppearance = {
  elements: {
    avatarBox: "size-9 rounded-xl",
    userButtonPopoverCard:
      "rounded-2xl border border-border-soft shadow-soft-card",
  },
} as const;
