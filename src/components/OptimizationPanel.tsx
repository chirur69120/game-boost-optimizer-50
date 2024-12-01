import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Cpu, 
  Network,
  Gamepad,
  Monitor,
  HardDrive,
  Memory,
  Fan,
  Settings,
  Wifi,
  Battery
} from "lucide-react";
import { toast } from "sonner";

export function OptimizationPanel() {
  const handleOptimize = () => {
    toast.success("Optimisation lancée", {
      description: "1500+ optimisations système sont en cours d'application...",
    });
  };

  return (
    <Card className="p-6 bg-gaming-card border-gaming-accent/20">
      <h2 className="text-xl font-bold text-gaming-text mb-4">Optimisations Rapides (1500+ tweaks)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <Zap className="h-6 w-6 text-gaming-accent" />
            <span className="text-gaming-text">Boost Performance</span>
            <span className="text-xs text-gaming-text/60">500+ tweaks</span>
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
            <span className="text-xs text-gaming-text/60">200+ tweaks</span>
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
            <span className="text-xs text-gaming-text/60">300+ tweaks</span>
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
            <span className="text-xs text-gaming-text/60">150+ tweaks</span>
          </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <Gamepad className="h-6 w-6 text-gaming-accent" />
            <span className="text-gaming-text">Mode Gaming</span>
            <span className="text-xs text-gaming-text/60">100+ tweaks</span>
          </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <Monitor className="h-6 w-6 text-gaming-secondary" />
            <span className="text-gaming-text">Optimiser Affichage</span>
            <span className="text-xs text-gaming-text/60">75+ tweaks</span>
          </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <HardDrive className="h-6 w-6 text-gaming-accent" />
            <span className="text-gaming-text">Boost Disque</span>
            <span className="text-xs text-gaming-text/60">100+ tweaks</span>
          </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <Memory className="h-6 w-6 text-gaming-secondary" />
            <span className="text-gaming-text">Optimiser RAM</span>
            <span className="text-xs text-gaming-text/60">75+ tweaks</span>
          </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <Fan className="h-6 w-6 text-gaming-accent" />
            <span className="text-gaming-text">Gestion Thermique</span>
            <span className="text-xs text-gaming-text/60">50+ tweaks</span>
          </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <Settings className="h-6 w-6 text-gaming-secondary" />
            <span className="text-gaming-text">Windows Tweaks</span>
            <span className="text-xs text-gaming-text/60">100+ tweaks</span>
          </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <Wifi className="h-6 w-6 text-gaming-accent" />
            <span className="text-gaming-text">Latence Réseau</span>
            <span className="text-xs text-gaming-text/60">50+ tweaks</span>
          </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
          onClick={handleOptimize}
        >
          <div className="flex flex-col items-center gap-2">
            <Battery className="h-6 w-6 text-gaming-secondary" />
            <span className="text-gaming-text">Mode Batterie</span>
            <span className="text-xs text-gaming-text/60">50+ tweaks</span>
          </div>
        </Button>
      </div>
    </Card>
  );
}