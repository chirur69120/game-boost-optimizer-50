import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Cpu, Network } from "lucide-react";
import { toast } from "sonner";

export function OptimizationPanel() {
  const handleOptimize = () => {
    toast.success("Optimisation lancée", {
      description: "Les optimisations système sont en cours d'application...",
    });
  };

  return (
    <Card className="p-6 bg-gaming-card border-gaming-accent/20">
      <h2 className="text-xl font-bold text-gaming-text mb-4">Optimisations Rapides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <Zap className="h-6 w-6 text-gaming-accent" />
            <span className="text-gaming-text">Boost Performance</span>
          </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <Shield className="h-6 w-6 text-gaming-secondary" />
            <span className="text-gaming-text">Optimiser Sécurité</span>
          </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <Cpu className="h-6 w-6 text-gaming-accent" />
            <span className="text-gaming-text">Boost CPU/GPU</span>
          </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <Network className="h-6 w-6 text-gaming-secondary" />
            <span className="text-gaming-text">Optimiser Réseau</span>
          </div>
        </Button>
      </div>
    </Card>
  );
}