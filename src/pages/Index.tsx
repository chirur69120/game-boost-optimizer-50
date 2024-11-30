import { SystemMetrics } from "@/components/SystemMetrics";
import { OptimizationPanel } from "@/components/OptimizationPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gaming-text">PC Gaming Optimizer</h1>
          <div className="h-2 w-2 rounded-full bg-gaming-accent animate-pulse" />
        </div>
        
        <OptimizationPanel />
        <SystemMetrics />
      </div>
    </div>
  );
};

export default Index;