"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { MoreHorizontal } from "lucide-react";

const data = [
  { month: "Jan", revenue: 120 },
  { month: "", revenue: 150 },
  { month: "Mar", revenue: 140 },
  { month: "", revenue: 160 },
  { month: "", revenue: 230 },
  { month: "Jun", revenue: 220 },
//   { month: "Jul", revenue: 210 },
//   { month: "Aug", revenue: 180 },
//   { month: "Sep", revenue: 240 },
//   { month: "Oct", revenue: 280 },
//   { month: "Nov", revenue: 290 },
//   { month: "Dec", revenue: 310 },
];
const RevenueGraph = () => {
  return (
    <div className="bg-white rounded-xl mx-4 px-4 pt-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Revenue Graph</h2>
        <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Revenue Display */}
      <div className="mb-8">
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold text-gray-900">12.4k</span>
          <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
            +10.7% last mo
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#revenueGradient)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueGraph;
