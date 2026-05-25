"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type AppSelectOption = {
  value: string;
  label: string;
};

type AppSelectProps = React.ComponentProps<typeof Select> & {
  className?: string;
  placeholder?: string;
  options: readonly AppSelectOption[];
};

function AppSelect({
  className,
  placeholder = "Select an option",
  options,
  ...props
}: AppSelectProps) {
  return (
    <Select {...props}>
      <SelectTrigger
        className={cn(
          "h-10 w-full rounded-xl border-border-soft bg-surface-card px-3 text-text-primary focus-visible:border-primary focus-visible:ring-primary/20",
          className
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export { AppSelect };
export type { AppSelectOption };
