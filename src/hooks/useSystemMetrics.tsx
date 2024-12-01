import { useState, useEffect } from 'react';

interface SystemMetrics {
  cpu: {
    usage: number;
  };
  ram: {
    usage: number;
  };
  gpu: {
    usage: number;
  };
  storage: {
    used: number;
    total: number;
  };
}

export const useSystemMetrics = () => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: { usage: 0 },
    ram: { usage: 0 },
    gpu: { usage: 0 },
    storage: { used: 0, total: 100 }
  });

  useEffect(() => {
    const updateMetrics = () => {
      // Simuler des métriques en temps réel
      setMetrics({
        cpu: { usage: Math.random() * 100 },
        ram: { usage: Math.random() * 100 },
        gpu: { usage: Math.random() * 100 },
        storage: {
          used: Math.random() * 100,
          total: 100
        }
      });
    };

    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, []);

  return metrics;
};