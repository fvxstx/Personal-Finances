"use client";

import {
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

// LimitChartDashboard component, manipulate and show the chart of limit
export function LimitChartDashboard({ limit }: { limit: number }) {
  return (
    <div className="w-[50px] h-full">
      <ChartContainer
        config={chartConfig}
        className="aspect-square max-h-[250px]"
      >
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={limit}
          innerRadius={20}
          outerRadius={35}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[25, 13]}
          />
          <RadialBar dataKey="visitors" background cornerRadius={10} />
          <PolarRadiusAxis
            tick={false}
            tickLine={false}
            axisLine={false}
          ></PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}
