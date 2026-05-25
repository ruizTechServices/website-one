import { FileText } from "lucide-react";

import { cn } from "@/lib/utils";

type PdfFileIconProps = {
  className?: string;
};

function PdfFileIcon({ className }: PdfFileIconProps) {
  return (
    <span
      aria-label="PDF file"
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-lg bg-danger-soft text-danger",
        className
      )}
    >
      <FileText aria-hidden="true" />
    </span>
  );
}

export { PdfFileIcon };
