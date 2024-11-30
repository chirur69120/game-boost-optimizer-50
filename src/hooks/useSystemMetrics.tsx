import { useState, useEffect } from "react";

interface SystemMetrics {
  cpu: {
    usage: number;
    temperature: number;
    frequency: number;
  };
  ram: {
    used: number;
    total: number;
    usage: number;
  };
  gpu: {
    usage: number;
    temperature: number;
    memory: number;
  };
  storage: {
    used: number;
    total: number;
    readSpeed: number;
    writeSpeed: number;
  };
}

export function useSystemMetrics() {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: { usage: 0, temperature: 0, frequency: 3.6 },
    ram: { used: 0, total: 16, usage: 0 },
    gpu: { usage: 0, temperature: 0, memory: 0 },
    storage: { used: 0, total: 1000, readSpeed: 0, writeSpeed: 0 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: {
          usage: Math.random() * 100,
          temperature: 40 + Math.random() * 40,
          frequency: 3.6 + Math.random() * 1.4,
        },
        ram: {
          used: Math.random() * 16,
          total: 16,
          usage: (Math.random() * 16) / 16 * 100,
        },
        gpu: {
          usage: Math.random() * 100,
          temperature: 35 + Math.random() * 45,
          memory: Math.random() * 8,
        },
        storage: {
          used: 400 + Math.random() * 200,
          total: 1000,
          readSpeed: Math.random() * 2000,
          writeSpeed: Math.random() * 1500,
        },
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return metrics;
}