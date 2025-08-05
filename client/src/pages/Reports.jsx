import React from "react";

export default function Reports() {
  return (
    <div className="min-h-screen p-6  from-indigo-100 to-purple-100 transition-all">
      <h1 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
        Reports & Analytics
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Applicants", value: 1 },
          { label: "Shortlisted", value: 0 },
          { label: "Volunteers", value: 0 },
          { label: "Interns", value: 0 },
        ].map((item, index) => (
          <div key={index} className="p-6 rounded-xl shadow-md bg-gradient-to-br from-indigo-100 to-purple-100 text-center">
            <h2 className="text-xl font-semibold text-indigo-800 mb-2">{item.label}</h2>
            <p className="text-2xl font-bold text-indigo-600">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Submissions</h2>
        <ul className="space-y-3">
          {["", "", "", ""].map((item, index) => (
            <li key={index} className="text-sm text-gray-700">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
