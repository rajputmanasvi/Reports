import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function LeadStatusList() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  // Refs for date pickers
  const fromDateRef = useRef(null);
  const toDateRef = useRef(null);

  // Example table data
  const data = [
    { id: 1, status: "Pending", leads: 0 },
    { id: 2, status: "Closed", leads: 1 },
    { id: 3, status: "Open", leads: 2 },
    { id: 4, status: "Special", leads: 0 },
  ];

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSearch = () => {
    console.log(
      "Searching from:",
      formatDate(fromDate),
      "to:",
      formatDate(toDate)
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-5xl bg-white rounded-md shadow border border-gray-300">
        {/* Header */}
        <div className="px-6 py-3 border-b border-gray-300 bg-white rounded-t-md">
          <h2 className="text-lg font-semibold text-gray-800">
            Leads By <span className="font-bold">Status List</span>
          </h2>
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap items-center justify-end gap-16 px-8 py-5 border-gray-200">
          {/* From Date */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium text-sm">From</label>
            <div className="relative flex items-center">
              <DatePicker
                ref={fromDateRef}
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="From Date"
                className="border border-gray-300 rounded-l-md p-2 pl-3 w-40 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AEEF] text-gray-700 placeholder-gray-400"
                calendarClassName="rounded-md shadow-lg border border-gray-200"
                popperPlacement="bottom-start"
              />
              <FaCalendarAlt
                className="absolute right-3 text-[#00AEEF] cursor-pointer"
                onClick={() => fromDateRef.current?.setOpen(true)}
              />
            </div>
          </div>

          {/* To Date */}
          <div className="flex items-center gap-4">
            <label className="text-gray-700 font-medium text-sm">To</label>
            <div className="relative flex items-center">
              <DatePicker
                ref={toDateRef}
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="To Date"
                className="border border-gray-300 rounded-l-md p-2 pl-3 w-40 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AEEF] text-gray-700 placeholder-gray-400"
                calendarClassName="rounded-md shadow-lg border border-gray-200"
                popperPlacement="bottom-start"
              />
              <FaCalendarAlt
                className="absolute right-3 text-[#00AEEF] cursor-pointer"
                onClick={() => toDateRef.current?.setOpen(true)}
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex flex-col items-end">
            <button
              onClick={handleSearch}
              className="bg-[#00AEEF] text-white font-semibold px-6 py-2 rounded text-sm shadow-sm hover:bg-[#0095D9] transition duration-200 ease-in-out"
            >
              Search
            </button>
            <p className="text-red-500 text-xs font-medium mt-1 text-right">
              Leads Count Contain (Custom Leads + Deals)
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto px-6 py-4">
          <table className="min-w-full rounded-b-md">
            <thead className="bg-gray-100 text-gray-700 border-b-0">
              <tr>
                <th className="py-2 px-5 text-left w-[12%] font-medium text-sm">
                  SR. NO.
                </th>
                <th className="py-2 px-4 text-left font-medium text-sm">
                  LEADS STATUS
                </th>
                <th className="py-2 px-4 text-left font-medium text-sm">
                  LEADS
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition text-gray-700 text-sm"
                >
                  <td className="py-2 px-4 border text-left">{item.id}</td>
                  <td className="py-2 px-4 border text-left">{item.status}</td>
                  <td className="py-2 px-4 border text-left">{item.leads}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
