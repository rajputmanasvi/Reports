import React from "react";
import LeadsByProduct from "./components/LeadsByProduct";
import SalespersonLeads from "./components/SalespersonLeads";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          
        </h1>

        {/* Two charts side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Chart */}
          <div className="bg-#8c8c8c rounded-lg  w-full">
            <LeadsByProduct />
          </div>

          {/* Right Chart */}
          <div className="bg-#8c8c8c rounded-lg  w-full">
            <SalespersonLeads />
          </div>
        </div>
      </div>
    </div>
  );
}
