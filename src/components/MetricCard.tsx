import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon?: React.ReactNode;
  trend?: "up" | "down";
  className?: string;
}

export function MetricCard({ title, value, unit, icon, trend, className }: MetricCardProps) {
  return (
    <Card className={cn("p-4 bg-gaming-card border-gaming-accent/20", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm text-gaming-text/60">{title}</p>
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-gaming-text">
              {typeof value === "number" ? value.toFixed(1) : value}
            </span>
            {unit && <span className="text-sm text-gaming-text/60">{unit}</span>}
          </div>
        </div>
        {icon && (
          <div className="text-gaming-accent text-xl">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}