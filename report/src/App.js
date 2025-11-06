import React from "react";
import LeadsByProduct from "./components/LeadsByProduct";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 justify-center">
      <div className="max-w-5xl mx-auto">
        <LeadsByProduct />
      </div>
    </div>
  );
}
