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
  CircuitBoard,
  Fan,
  Settings,
  Wifi,
  Battery
} from "lucide-react";
import { toast } from "sonner";

const optimizationCategories = [
  {
    icon: Zap,
    title: "Boost Performance",
    tweaks: "500+ tweaks",
    color: "text-gaming-accent",
    message: "Optimisation des performances lancée",
    description: "Application de 500+ tweaks d'amélioration des performances..."
  },
  {
    icon: Shield,
    title: "Optimiser Sécurité",
    tweaks: "200+ tweaks",
    color: "text-gaming-secondary",
    message: "Optimisation de la sécurité lancée",
    description: "Application de 200+ tweaks de sécurité..."
  },
  {
    icon: Cpu,
    title: "Boost CPU/GPU",
    tweaks: "300+ tweaks",
    color: "text-gaming-accent",
    message: "Optimisation CPU/GPU lancée",
    description: "Application de 300+ tweaks d'optimisation CPU/GPU..."
  },
  {
    icon: Network,
    title: "Optimiser Réseau",
    tweaks: "150+ tweaks",
    color: "text-gaming-secondary",
    message: "Optimisation réseau lancée",
    description: "Application de 150+ tweaks réseau..."
  },
  {
    icon: Gamepad,
    title: "Mode Gaming",
    tweaks: "100+ tweaks",
    color: "text-gaming-accent",
    message: "Mode gaming activé",
    description: "Application de 100+ tweaks gaming..."
  },
  {
    icon: Monitor,
    title: "Optimiser Affichage",
    tweaks: "75+ tweaks",
    color: "text-gaming-secondary",
    message: "Optimisation affichage lancée",
    description: "Application de 75+ tweaks d'affichage..."
  },
  {
    icon: HardDrive,
    title: "Boost Disque",
    tweaks: "100+ tweaks",
    color: "text-gaming-accent",
    message: "Optimisation disque lancée",
    description: "Application de 100+ tweaks disque..."
  },
  {
    icon: CircuitBoard,
    title: "Optimiser RAM",
    tweaks: "75+ tweaks",
    color: "text-gaming-secondary",
    message: "Optimisation RAM lancée",
    description: "Application de 75+ tweaks mémoire..."
  },
  {
    icon: Fan,
    title: "Gestion Thermique",
    tweaks: "50+ tweaks",
    color: "text-gaming-accent",
    message: "Optimisation thermique lancée",
    description: "Application de 50+ tweaks thermiques..."
  },
  {
    icon: Settings,
    title: "Windows Tweaks",
    tweaks: "100+ tweaks",
    color: "text-gaming-secondary",
    message: "Optimisation Windows lancée",
    description: "Application de 100+ tweaks Windows..."
  },
  {
    icon: Wifi,
    title: "Latence Réseau",
    tweaks: "50+ tweaks",
    color: "text-gaming-accent",
    message: "Optimisation latence lancée",
    description: "Application de 50+ tweaks de latence..."
  },
  {
    icon: Battery,
    title: "Mode Batterie",
    tweaks: "50+ tweaks",
    color: "text-gaming-secondary",
    message: "Mode batterie activé",
    description: "Application de 50+ tweaks d'économie d'énergie..."
  }
];

export function OptimizationPanel() {
  const handleOptimize = (category: typeof optimizationCategories[0]) => {
    toast.success(category.message, {
      description: category.description,
    });
  };

  return (
    <Card className="p-6 bg-gaming-card border-gaming-accent/20">
      <h2 className="text-xl font-bold text-gaming-text mb-4">Optimisations Rapides (1500+ tweaks)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {optimizationCategories.map((category, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto py-4 px-6 bg-gaming-background hover:bg-gaming-accent/10 border-gaming-accent/20"
            onClick={() => handleOptimize(category)}
          >
            <div className="flex flex-col items-center gap-2">
              <category.icon className={`h-6 w-6 ${category.color}`} />
              <span className="text-gaming-text">{category.title}</span>
              <span className="text-xs text-gaming-text/60">{category.tweaks}</span>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
}