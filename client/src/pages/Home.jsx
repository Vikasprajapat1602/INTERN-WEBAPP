// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-100 to-blue-200 text-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-indigo-700">Welcome to Basti Ki Pathshala</h1>
      <p className="text-lg mb-6 max-w-xl text-gray-700">
        Empowering communities through education. Join us as an intern or volunteer and make a difference.
      </p>
      <div className="space-x-4">
        <Link to="/register">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
            Apply Now
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="bg-gray-100 text-indigo-700 px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition">
            Admin Login
          </button>
        </Link>
      </div>
    </div>
  );
}
