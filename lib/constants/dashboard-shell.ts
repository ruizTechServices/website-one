import {
  FileArchive,
  FileText,
  LayoutDashboard,
  WandSparkles,
} from "lucide-react";

export const dashboardNavItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Generate Worksheet",
    href: "/dashboard/generate",
    icon: WandSparkles,
  },
  {
    label: "My Worksheets",
    href: "/dashboard/worksheets",
    icon: FileText,
  },
  {
    label: "PDF Exports",
    href: "/dashboard/pdf-exports",
    icon: FileArchive,
  },
] as const;

export const authShellStatusItems = [
  {
    label: "Clerk auth",
    status: "Connected",
    tone: "purple",
  },
  {
    label: "Google sign-in",
    status: "Configured in Clerk",
    tone: "success",
  },
  {
    label: "Dashboard routes",
    status: "Protected",
    tone: "success",
  },
] as const;
