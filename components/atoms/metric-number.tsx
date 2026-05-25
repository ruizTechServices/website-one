import { cn } from "@/lib/utils";

type MetricNumberProps = {
  value: string | number;
  trend?: string;
  subtitle?: string;
  className?: string;
};

function MetricNumber({ value, trend, subtitle, className }: MetricNumberProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold leading-none tracking-normal text-text-primary">
          {value}
        </span>
        {trend ? (
          <span className="pb-0.5 text-xs font-semibold text-success">
            {trend}
          </span>
        ) : null}
      </div>
      {subtitle ? (
        <span className="text-sm font-medium text-text-muted">{subtitle}</span>
      ) : null}
    </div>
  );
}

export { MetricNumber };
