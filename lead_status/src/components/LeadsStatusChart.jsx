import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";

const LeadsStatus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { name: "Pending", leads: 0 },
    { name: "Closed", leads: 1 },
    { name: "Open", leads: 2 },
    { name: "Special", leads: 0 },
  ];

  const handlePrint = () => {
    window.print();
  };

  // ✅ Custom Legend
  const CustomLegend = () => (
    <div className="flex items-center justify-start mt-1 ml-12">
      <div className="w-[20px] h-[10px] bg-[#007bff] mr-2 rounded-sm"></div>
      <span className="text-[13px] text-gray-700 font-medium">No of leads</span>
    </div>
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-300 rounded-md shadow-md p-2 text-[13px]">
          <p className="font-semibold text-black mb-1">{label}</p>
          <p className="text-black">No of leads: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  const minorLines = [
    0.25, 0.5, 0.75,
    1.25, 1.5, 1.75,
    2.25, 2.5, 2.75,
    3.25, 3.5, 3.75,
  ];

  return (
    <div className="w-full px-8 py-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
        <h2 className="text-gray-700 text-sm font-semibold">
          Leads <span className="font-bold">Status</span>
        </h2>
        <button
          onClick={handlePrint}
          className="bg-purple-800 text-white text-sm px-4 py-1.5 rounded hover:bg-purple-900 transition"
        >
          Print
        </button>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-b-md" style={{ userSelect: "none" }}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
            barCategoryGap="20%"
          >
            <CartesianGrid stroke="#d0d0d0" horizontal vertical={false} />
            {minorLines.map((value, i) => (
              <ReferenceLine key={i} y={value} stroke="#f2f2f2" />
            ))}

            <YAxis
              tick={{ fill: "#333", fontSize: 13 }}
              domain={[0, 4]}
              ticks={[0, 1, 2, 3, 4]}
              axisLine={false}
              tickLine={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "#333", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            <Legend verticalAlign="top" align="left" content={<CustomLegend />} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />

            <Bar
              dataKey="leads"
              name="No of leads"
              barSize={80}
              isAnimationActive={false}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === activeIndex ? "#0056b3" : "#007bff"}
                  style={{
                    transition: "fill 0.2s ease-in-out",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LeadsStatus;
