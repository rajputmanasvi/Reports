import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function LeadsIntoDealsList() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const fromDateRef = useRef(null);
  const toDateRef = useRef(null);

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSearch = () => {
    console.log("Searching from:", formatDate(fromDate), "to:", formatDate(toDate));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-6">
      <div className="w-full max-w-5xl bg-white border border-gray-300 rounded-md shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-300 px-4 py-3">
          <h2 className="text-gray-800 text-base font-semibold">
            Leads Into <span className="font-bold">Deals List</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-end gap-16 px-8 py-3 border-gray-200">
          {/* From Date */}
          <div className="flex items-center gap-2 mt-3">
            <label className="text-gray-700 font-medium text-sm">From</label>
            <div className="flex relative">
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="From Date"
                calendarClassName="tailwind-datepicker"
                className="border border-gray-300 rounded-l-md p-2 w-48 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                ref={fromDateRef}
              />
              <button
                type="button"
                onClick={() => fromDateRef.current.setOpen(true)}
                className="bg-[#00AEEF] rounded-r-md px-3 py-[10px] flex items-center justify-center"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
            </div>
          </div>

          {/* To Date */}
          <div className="flex items-center gap-2 mt-3">
            <label className="text-gray-700 font-medium text-sm">To</label>
            <div className="flex relative">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="To Date"
                calendarClassName="tailwind-datepicker"
                className="border border-gray-300 rounded-l-md p-2 w-48 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                ref={toDateRef}
              />
              <button
                type="button"
                onClick={() => toDateRef.current.setOpen(true)}
                className="bg-[#00AEEF] rounded-r-md px-3 py-[10px] flex items-center justify-center"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="flex flex-col items-end mt-3">
            <button
              onClick={handleSearch}
              className="bg-[#00AEEF] text-white font-semibold px-11 py-1.5 rounded text-sm shadow-sm hover:bg-[#0095D9] transition duration-200 ease-in-out"
            >
              Search
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="px-6 pb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="text-left py-2 px-4 border-b border-gray-200 font-semibold w-[10%]">
                  SR. NO.
                </th>
                <th className="text-left py-2 px-4 border-b border-gray-200 font-semibold">
                  TOTAL LEADS
                </th>
                <th className="text-left py-2 px-4 border-b border-gray-200 font-semibold">
                  TOTAL DEALS
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
