import React from "react";
// import LeadsByProduct from "./components/LeadsByProduct";
import SalespersonLeads from "./components/SalespersonLeads";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 justify-center">
      <div className="max-w-5xl mx-auto">
        <SalespersonLeads />
      </div>
    </div>
  );
}
