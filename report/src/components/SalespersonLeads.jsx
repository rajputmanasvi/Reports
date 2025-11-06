// src/components/SalespersonLeads.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function SalespersonLeads({ data, title = "Salesperson Leads" }) {
  const handlePrint = () => window.print();

  return (
    <div className="bg-white border border-gray-300 rounded-md shadow-md p-4">
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <h2 className="text-lg font-semibold text-gray-800">
          {title.split(" ")[0]} <span className="font-bold">{title.split(" ")[1]}</span>
        </h2>
        <button
          onClick={handlePrint}
          className="bg-purple-800 text-white text-sm font-medium px-4 py-2 rounded hover:bg-purple-900 transition"
        >
          Print
        </button>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* stacked bars: pick colors similar to screenshot */}
            <Bar dataKey="all" stackId="a" fill="#FF8A80" name="All Leads" />
            <Bar dataKey="miss" stackId="a" fill="#007bff" name="Miss lead" />
            <Bar dataKey="unscheduled" stackId="a" fill="#94a3b8" name="Unscheduled" />
            <Bar dataKey="closed" stackId="a" fill="#6ee7b7" name="Closed Leads" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
