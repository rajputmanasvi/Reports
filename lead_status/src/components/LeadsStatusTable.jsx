import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const LeadsStatusTable = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(50);
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    { status: "Special", leads: 0 },
    { status: "Pending", leads: 0 },
    { status: "Open", leads: 2 },
    { status: "Closed", leads: 1 },
  ];

  const filteredData = data.filter((item) =>
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full px-8 py-6 bg-white">
      <div className="shadow-sm border border-gray-200 rounded-md w-full">
        {/* Header Controls */}
        <div className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
          {/* Entries Dropdown */}
          <div className="relative flex items-center">
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(e.target.value)}
              className="appearance-none border border-gray-300 rounded-sm text-sm px-3 py-2 pr-8 focus:outline-none cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-2 text-gray-500 pointer-events-none"
            />
          </div>

          {/* Search */}
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600">Search:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 w-64"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto p-8">
          <table className="w-full text-sm text-gray-700 border border-gray-200 border-collapse">
            <thead>
              <tr className="text-left">
                <th className="px-6 py-3 border border-gray-200 font-semibold uppercase text-xs w-[80%]">
                  Lead Status
                </th>
                <th className="px-6 py-3 border border-gray-200 font-semibold uppercase text-xs text-left bg-gray-100">
                  Total Leads
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors text-[15px]"
                >
                  <td className="px-6 py-4 border border-gray-200">
                    {item.status}
                  </td>
                  <td className="px-6 py-4 border border-gray-200 text-center">
                    {item.leads}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center gap-6 px-8 py-4  border-gray-200 text-sm text-gray-600">
          <span className="text-gray-500 text-[13px]">
            Showing <span className="font-semibold text-gray-700">1</span> to{" "}
            <span className="font-semibold text-gray-700">
              {filteredData.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-700">{data.length}</span>{" "}
            entries
          </span>

          <span className="text-gray-400">|</span>

          {/* Pagination */}
          <div className="flex items-center space-x-2">
            <button
              disabled
              className="p-2 rounded border border-gray-300 bg-gray-100 opacity-50 cursor-not-allowed"
            >
              <img src="/img/left arrow.jpeg" alt="Left Arrow" className="w-4 h-4" />
            </button>
            <span className="text-gray-700 text-sm border border-gray-300 rounded px-3 py-[5px] bg-gray-100">
              1
            </span>
            <button
              disabled
              className="p-2 rounded border border-gray-300 bg-gray-100 opacity-50 cursor-not-allowed"
            >
              <img src="/img/right arrow.jpeg" alt="Right Arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsStatusTable;
