export const OPTIMIZATION_CATEGORIES = [
  {
    id: 'performance',
    title: 'Boost Performance',
    tweaks: 500,
    icon: 'Zap',
    color: 'accent'
  },
  {
    id: 'security',
    title: 'Optimiser Sécurité', 
    tweaks: 200,
    icon: 'Shield',
    color: 'secondary'
  },
  // ... autres catégories
] as const;

export const TOAST_MESSAGES = {
  optimization: {
    success: "Optimisation lancée",
    description: "1500+ optimisations système sont en cours d'application..."
  }
} as const;