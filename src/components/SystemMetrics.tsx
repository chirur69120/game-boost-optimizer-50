import { Cpu, CircuitBoard, HardDrive, MonitorSmartphone } from "lucide-react";
import { MetricCard } from "./MetricCard";
import { PerformanceGraph } from "./PerformanceGraph";
import { useSystemMetrics } from "@/hooks/useSystemMetrics";

export function SystemMetrics() {
  const metrics = useSystemMetrics();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="CPU Usage"
          value={metrics.cpu.usage}
          unit="%"
          icon={<Cpu className="h-6 w-6" />}
        />
        <MetricCard
          title="RAM Usage"
          value={metrics.ram.usage}
          unit="%"
          icon={<CircuitBoard className="h-6 w-6" />}
        />
        <MetricCard
          title="GPU Usage"
          value={metrics.gpu.usage}
          unit="%"
          icon={<MonitorSmartphone className="h-6 w-6" />}
        />
        <MetricCard
          title="Storage"
          value={(metrics.storage.used / metrics.storage.total) * 100}
          unit="%"
          icon={<HardDrive className="h-6 w-6" />}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PerformanceGraph
          title="CPU Performance"
          data={metrics.cpu.usage}
          unit="%"
          color="#06b6d4"
        />
        <PerformanceGraph
          title="GPU Performance"
          data={metrics.gpu.usage}
          unit="%"
          color="#7c3aed"
        />
      </div>
    </div>
  );
}