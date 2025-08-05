// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Dashboard() {
//     const [applicantCount, setApplicantCount] = useState(0);

//     useEffect(() => {
//         const fetchCount = async () => {
//             try {
//                 const res = await axios.get("http://localhost:8000/api/applicants/");
//                 setApplicantCount(res.data.length);
//             } catch (error) {
//                 console.error("Error fetching applicant count:", error);
//             }
//         };

//         fetchCount();
//     }, []);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
//             <h1 className="text-3xl font-bold text-indigo-800 mb-6">Admin Dashboard</h1>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
//                     <h2 className="text-xl font-semibold text-indigo-700 mb-2">Total Applicants</h2>
//                     <p className="text-4xl font-bold text-gray-800">{applicantCount}</p>
//                 </div>

//                 <div className="bg-white p-6 rounded-2xl shadow-md">
//                     <h2 className="text-xl font-semibold text-indigo-700 mb-2">Welcome</h2>
//                     <p className="text-gray-700">Monitor new applications submitted by interns or volunteers.</p>
//                 </div>

//                 {/* Optional: Add more cards like recent submissions, messages, etc. */}
//             </div>
//         </div>
//     );
// }

import { useEffect, useState } from "react";
import { FaUsers, FaUserCheck, FaUserPlus, FaFileAlt } from "react-icons/fa";
import axios from "axios";

export default function Dashboard() {
  const [applicantCount, setApplicantCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/applicants/");
        setApplicantCount(res.data.length);
      } catch (error) {
        console.error("Error fetching applicant count:", error);
      }
    };

    fetchCount();
  }, []);

  const stats = [
    { icon: <FaUsers />, label: "Total Applicants", count: applicantCount },
    { icon: <FaUserCheck />, label: "Shortlisted", count: 0 },
    { icon: <FaUserPlus />, label: "Interns", count: 0 },
    { icon: <FaFileAlt />, label: "Documents", count: 0 },
  ];

  return (
    <div className="min-h-screen p-6 from-indigo-100 to-purple-100 transition-all">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 px-6 rounded-2xl shadow-md mb-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Admin Dashboard</h1>
        <p className="mt-2 text-lg">Manage everything in one place with ease</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-xl shadow hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="text-indigo-600 text-3xl">{item.icon}</div>
              <div>
                <p className="text-gray-800 text-sm">{item.label}</p>
                <p className="text-2xl font-bold text-indigo-700">
                  {item.count}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2 Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-gray-100 dark:bg-gray-400 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-gray-800 text-sm">
            <li>• Pooja submitted application</li>
            <li>• Ravi shortlisted 2 candidates</li>
            <li>• Aman uploaded new report</li>
            <li>• Volunteer data updated</li>
          </ul>
        </div>

        {/* Quick Info / Notices */}
        <div className="bg-gray-100 dark:bg-gray-400 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Notices & Updates</h2>
          <div className="text-gray-800  text-sm space-y-3">
            <p>Internship review scheduled for next week.</p>
            <p>File uploads must be completed by Friday.</p>
            <p>New version of portal will release soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
