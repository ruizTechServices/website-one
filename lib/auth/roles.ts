export const appUserRoles = ["teacher", "tutor", "admin"] as const;

export type AppUserRole = (typeof appUserRoles)[number];

export type TinySheetsPublicMetadata = {
  role?: AppUserRole;
};

export const DEFAULT_APP_USER_ROLE: AppUserRole = "teacher";
export const CLERK_ROLE_METADATA_PATH = "publicMetadata.role";

export function isAppUserRole(value: unknown): value is AppUserRole {
  return (
    typeof value === "string" &&
    appUserRoles.includes(value as AppUserRole)
  );
}

export function getAppUserRole(
  publicMetadata: Record<string, unknown> | null | undefined
): AppUserRole {
  const role = publicMetadata?.role;

  if (isAppUserRole(role)) {
    return role;
  }

  return DEFAULT_APP_USER_ROLE;
}

export function getRoleLabel(role: AppUserRole): string {
  const labels: Record<AppUserRole, string> = {
    teacher: "Teacher",
    tutor: "Tutor",
    admin: "Admin",
  };

  return labels[role];
}
