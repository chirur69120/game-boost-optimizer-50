import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

interface PerformanceGraphProps {
  title: string;
  data: number;
  unit: string;
  color: string;
}

export function PerformanceGraph({ title, data, unit, color }: PerformanceGraphProps) {
  const [graphData, setGraphData] = useState<Array<{ value: number; time: number }>>([]);

  useEffect(() => {
    setGraphData((prev) => {
      const newData = [...prev, { value: data, time: Date.now() }];
      if (newData.length > 20) newData.shift();
      return newData;
    });
  }, [data]);

  return (
    <Card className="p-4 bg-gaming-card border-gaming-accent/20">
      <h3 className="text-sm font-medium text-gaming-text/60 mb-4">{title}</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphData}>
            <XAxis dataKey="time" hide />
            <YAxis hide domain={[0, 100]} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-gaming-background p-2 rounded border border-gaming-accent/20">
                      <p className="text-gaming-text">
                        {payload[0].value.toFixed(1)} {unit}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}