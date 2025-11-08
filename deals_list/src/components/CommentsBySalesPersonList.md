import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CommentsBySalesPersonList() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedSalesPerson, setSelectedSalesPerson] = useState("All Sales Person");

  const fromDateRef = useRef(null);
  const toDateRef = useRef(null);

  const salesPersons = ["All Sales Person", "Test (CEO)", "John Doe", "Jane Smith"];

  const data = [
    {
      id: 1,
      date: "03-Nov-25 17:17",
      contactPerson: "MPL ZXS",
      company: "Company Inc.",
      dueDate: "10-Mar-21 14:05",
      location: "Surat, India",
      comments: "hi - By Test",
      salesPerson: "Test (CEO)",
    },
    {
      id: 2,
      date: "28-Oct-25 10:29",
      contactPerson: "MPL1 ZXS1",
      company: "Company Inc.",
      dueDate: "09-Mar-21 10:33",
      location: "Surat, India",
      comments: "Need to have a followup call. - By Test",
      salesPerson: "Test (CEO)",
    },
  ];

  const handleSearch = () => {
    console.log("Filter:", selectedSalesPerson, fromDate, toDate);
  };

  const handleExport = () => {
    console.log("Exporting to Excel...");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-6">
      <div className="w-full max-w-7xl bg-white border border-gray-300 rounded-md shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-300 px-4 py-3 flex justify-between items-center">
          <h2 className="text-gray-800 text-base font-semibold">
            Comments Given By <span className="font-bold">Sales Person</span>
          </h2>
          <button
            onClick={handleExport}
            className="bg-[#4B63A1] text-white font-semibold px-4 py-1.5 rounded text-sm shadow-sm hover:bg-[#3B4F8C] transition duration-200 ease-in-out"
          >
            Export To Excel
          </button>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center justify-between px-8 py-4">
          {/* Left Filters */}
          <div className="flex items-center gap-6 flex-wrap">
            {/* Sales Person Dropdown */}
            <div className="flex items-center gap-2">
              <select
                value={selectedSalesPerson}
                onChange={(e) => setSelectedSalesPerson(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-96 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
              >
                {salesPersons.map((person, idx) => (
                  <option key={idx} value={person}>
                    {person}
                  </option>
                ))}
              </select>
            </div>

            {/* From Date */}
            <div className="relative flex items-center">
              <DatePicker
                ref={fromDateRef}
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="From Date"
                className="border border-gray-300 rounded-l-md p-2 pl-3 w-72 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AEEF] text-gray-700 placeholder-gray-400"
              />
              <FaCalendarAlt
                className="absolute right-3 text-[#00AEEF] cursor-pointer"
                onClick={() => fromDateRef.current?.setOpen(true)}
              />
            </div>

            {/* To Date */}
            <div className="relative flex items-center">
              <DatePicker
                ref={toDateRef}
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="To Date"
                className="border border-gray-300 rounded-l-md p-2 pl-3 w-72 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AEEF] text-gray-700 placeholder-gray-400"
              />
              <FaCalendarAlt
                className="absolute right-3 text-[#00AEEF] cursor-pointer"
                onClick={() => toDateRef.current?.setOpen(true)}
              />
            </div>
          </div>

          {/* Search Button on Right */}
          <div className="flex items-center mt-3 sm:mt-0">
            <button
              onClick={handleSearch}
              className="bg-[#00AEEF] text-white font-semibold px-8 py-2 rounded text-sm shadow-sm hover:bg-[#0095D9] transition duration-200 ease-in-out"
            >
              Search
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="px-6 pb-6 overflow-x-auto">
          <table className="min-w-full text-sm border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="text-left py-2 px-4 border-b border-gray-200 font-semibold w-[5%]">
                  SR.NO.
                </th>
                <th className="text-left py-2 px-4 border-b border-gray-200 font-semibold w-[12%]">
                  DATE
                </th>
                <th className="text-left py-2 px-4 border-b border-gray-200 font-semibold">
                  CONTACT PERSON
                </th>
                <th className="text-left py-2 px-4 border-b border-gray-200 font-semibold">
                  COMPANY
                </th>
                <th className="text-left py-2 px-4 border-b border-gray-200 font-semibold">
                  DUE DATE
                </th>
                <th className="text-left py-2 px-4 border-b border-gray-200 font-semibold">
                  LOCATION
                </th>
                <th className="text-left py-2 px-4 border-b border-gray-200 font-semibold">
                  COMMENTS
                </th>
                <th className="text-left py-2 px-4 border-b border-gray-200 font-semibold">
                  SALES PERSON
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50 border-b border-gray-200 text-gray-700"
                >
                  <td className="py-2 px-4">{row.id}</td>
                  <td className="py-2 px-4">{row.date}</td>
                  <td className="py-2 px-4">{row.contactPerson}</td>
                  <td className="py-2 px-4">{row.company}</td>
                  <td className="py-2 px-4">{row.dueDate}</td>
                  <td className="py-2 px-4">{row.location}</td>
                  <td className="py-2 px-4">{row.comments}</td>
                  <td className="py-2 px-4">{row.salesPerson}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
