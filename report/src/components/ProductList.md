import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function LeadsByProductList() {
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
    console.log(
      "Searching from:",
      formatDate(fromDate),
      "to:",
      formatDate(toDate)
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-3">
      <div className="w-full max-w-5xl bg-white rounded-md shadow border border-gray-300">
        {/* Header */}
        <div className="px-6 py-3 border-b border-gray-300 bg-white rounded-t-md">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 text-center md:text-left">
            Leads By <span className="font-bold">Product List</span>
          </h2>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 md:gap-10 px-5 md:px-8 py-5 border-gray-200">
          {/* From Date */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium text-sm min-w-[50px]">
              From
            </label>
            <div className="relative flex items-center w-full md:w-auto">
              <DatePicker
                ref={fromDateRef}
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="From Date"
                className="border border-gray-300 rounded-md p-2 w-full md:w-40 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AEEF] text-gray-700 placeholder-gray-400"
                calendarClassName="rounded-md shadow-lg border border-gray-200"
              />
              <FaCalendarAlt
                className="absolute right-3 text-[#00AEEF] cursor-pointer"
                onClick={() => fromDateRef.current?.setOpen(true)}
              />
            </div>
          </div>

          {/* To Date */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium text-sm min-w-[50px]">
              To
            </label>
            <div className="relative flex items-center w-full md:w-auto">
              <DatePicker
                ref={toDateRef}
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="To Date"
                className="border border-gray-300 rounded-md p-2 w-full md:w-40 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AEEF] text-gray-700 placeholder-gray-400"
                calendarClassName="rounded-md shadow-lg border border-gray-200"
              />
              <FaCalendarAlt
                className="absolute right-3 text-[#00AEEF] cursor-pointer"
                onClick={() => toDateRef.current?.setOpen(true)}
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <button
              onClick={handleSearch}
              className="bg-[#00AEEF] w-full md:w-auto text-white font-semibold px-6 py-2 rounded text-sm shadow-sm hover:bg-[#0095D9] transition duration-200 ease-in-out"
            >
              Search
            </button>
            <p className="text-red-500 text-xs font-medium mt-1 text-center md:text-right">
              Leads Count Contain (Custom Leads + Deals)
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto px-3 md:px-6 py-4">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700 border-b-0">
              <tr>
                <th className="py-2 px-4 text-left font-medium">SR. NO.</th>
                <th className="py-2 px-4 text-left font-medium">PRODUCT</th>
                <th className="py-2 px-4 text-left font-medium">LEADS ADDED</th>
                <th className="py-2 px-4 text-left font-medium">
                  FOLLOW UP LEADS
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, product: "Galaxy S1", added: 1, followup: 1 },
                { id: 2, product: "Galaxy S2", added: 0, followup: 0 },
                { id: 3, product: "Bandhani", added: 2, followup: 2 },
                { id: 4, product: "Lenovo Ideapad", added: 0, followup: 0 },
                { id: 5, product: "hi", added: 0, followup: 0 },
              ].map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition text-gray-700"
                >
                  <td className="py-2 px-4 border text-left">{item.id}</td>
                  <td className="py-2 px-4 border">{item.product}</td>
                  <td className="py-2 px-4 border text-left">{item.added}</td>
                  <td className="py-2 px-4 border text-left">
                    {item.followup}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
