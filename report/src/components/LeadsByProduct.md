import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const LeadsByProduct = () => {
  const data = [
    { name: "Galaxy S1", leads: 1 },
    { name: "Galaxy S2", leads: 0 },
    { name: "Bandhani", leads: 2 },
    { name: "Lenovo Ideapad", leads: 0 },
    { name: "hi", leads: 0 },
  ];

  const handlePrint = () => {
    window.print();
  };

  const CustomLegend = () => (
    <div style={{ display: "flex", alignItems: "center", paddingBottom: 20 }}>
      <div
        style={{
          width: 20,
          height: 10,
          backgroundColor: "#007bff",
          marginRight: 8,
          borderRadius: 2,
        }}
      ></div>
      <span style={{ color: "#000", fontWeight: "500", fontSize: "14px" }}>
        No of leads
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center p-4 bg-#8c8c8c">
      <div className="bg-white border border-gray-300 rounded-md shadow-md w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-[#f9f9f9]">
          <h2 className="text-gray-700 text-sm font-semibold">
            Leads by <span className="font-bold">Product</span>
          </h2>
          <button
            onClick={handlePrint}
            className="bg-purple-800 text-white text-sm px-4 py-1.5 rounded hover:bg- #583A63-900"
          >
            Print
          </button>
        </div>

        {/* Chart */}
        <div className="p-6 bg-white rounded-b-md">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              barCategoryGap="20%"
            >
              {/* ✅ Light grid lines */}
              <CartesianGrid stroke="#e0e0e0"  vertical={false} />

              {/* ✅ Solid lines between Y intervals */}
              <ReferenceLine y={0.5} stroke="#c0c0c0" />
              <ReferenceLine y={1.5} stroke="#c0c0c0" />
              <ReferenceLine y={2.5} stroke="#c0c0c0" />
              <ReferenceLine y={3.5} stroke="#c0c0c0" />

              <XAxis dataKey="name" tick={{ fill: "#333" }} />
              <YAxis
                tick={{ fill: "#333" }}
                allowDecimals={false}
                domain={[0, "dataMax + 2"]}
                axisLine={false}
                tickLine={false}
              />
              <Legend verticalAlign="top" align="left" content={<CustomLegend />} />
              <Bar
                dataKey="leads"
                fill="#007bff"
                name="No of leads"
                barSize={80}
                activeBar={false}
                isAnimationActive={false}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LeadsByProduct;
