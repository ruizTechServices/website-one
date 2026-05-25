import type { LucideIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type SidebarNavItemProps = {
  href: string;
  icon: LucideIcon;
  label: string;
  active?: boolean;
};

function SidebarNavItem({
  href,
  icon: Icon,
  label,
  active = false,
}: SidebarNavItemProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition",
        active
          ? "bg-primary-soft text-primary"
          : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
      )}
    >
      <Icon aria-hidden="true" className="size-4" />
      <span>{label}</span>
    </Link>
  );
}

export { SidebarNavItem };
