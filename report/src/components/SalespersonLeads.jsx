import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const SalespersonLeads = () => {
  const data = [
    { name: "Suku", all: 2, miss: 1, unscheduled: 0, closed: 1 },
    { name: "Test", all: 1, miss: 1, unscheduled: 0, closed: 0 },
    { name: "Tester_salesman", all: 0, miss: 0, unscheduled: 0, closed: 0 },
    { name: "Test", all: 0, miss: 0, unscheduled: 0, closed: 0 },
  ];

  const handlePrint = () => window.print();

  const CustomLegend = () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        marginBottom: "10px",
      }}
    >
      <LegendItem color="#34d399" label="Todays added Leads" />
      <LegendItem color="#FF8A80" label="All Leads" />
      <LegendItem color="#007bff" label="Miss lead" />
      <LegendItem color="#94a3b8" label="Unscheduled" />
      <LegendItem color="#6ee7b7" label="Closed Leads" />
    </div>
  );

  const LegendItem = ({ color, label }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: 24,
          height: 12,
          backgroundColor: color,
          borderRadius: 1,
          marginRight: 6,
        }}
      ></div>
      <span style={{ fontSize: "13px", color: "#333" }}>{label}</span>
    </div>
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px 10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold", fontSize: "13px" }}>
            {label}
          </p>
          {payload.map((entry, index) => (
            <p
              key={`item-${index}`}
              style={{
                margin: 0,
                color: entry.fill,
                fontSize: "13px",
              }}
            >
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white border border-gray-300 rounded-md shadow-md p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 border-b pb-2">
        <h2 className="text-lg font-semibold text-gray-800">
          Salesperson <span className="font-normal">Leads</span>
        </h2>
        <button
          onClick={handlePrint}
          className="bg-purple-800 text-white text-sm font-medium px-4 py-2 rounded hover:bg-purple-900 transition"
        >
          Print
        </button>
      </div>

      {/* Legend */}
      <CustomLegend />

      {/* Chart */}
      <div className="w-full h-96 flex flex-col items-center">
        <ResponsiveContainer width="70%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            {/* Grid lines */}
            <CartesianGrid stroke="#e5e7eb" strokeWidth={1} vertical={false} />

            {/* Separator lines between Y values */}
            <ReferenceLine y={3.5} stroke="#e5e7eb" strokeWidth={1} />
            <ReferenceLine y={2.5} stroke="#e5e7eb" strokeWidth={1} />
            <ReferenceLine y={1.5} stroke="#e5e7eb" strokeWidth={1} />
            <ReferenceLine y={0.5} stroke="#e5e7eb" strokeWidth={1} />

            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#333", fontWeight: "normal" }}
              axisLine={{ stroke: "#0c0c0cff" }}
            />

            {/* ✅ Clean Y-axis: no bold, no ticks, no vertical line */}
            <YAxis
              domain={[0, 4]}
              tickCount={5}
              tick={{ fontSize: 12, fill: "#333", fontWeight: "normal" }}
              axisLine={false} // hides Y-axis line
              tickLine={false} // hides small tick marks
            />

            <Tooltip content={<CustomTooltip />} cursor={false} />

            {/* Bars */}
            <Bar dataKey="all" stackId="a" fill="#FF8A80" name="All Leads" />
            <Bar dataKey="miss" stackId="a" fill="#007bff" name="Miss lead" />
            <Bar
              dataKey="unscheduled"
              stackId="a"
              fill="#94a3b8"
              name="Unscheduled"
            />
            <Bar dataKey="closed" stackId="a" fill="#6ee7b7" name="Closed Leads" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalespersonLeads;
