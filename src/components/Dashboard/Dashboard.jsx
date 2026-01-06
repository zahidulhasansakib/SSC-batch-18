import React from "react";
import { FaTimes } from "react-icons/fa";

const Dashboard = ({ isOpen, closeDashboard }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-gray-900 text-white shadow-2xl transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={closeDashboard}>
          <FaTimes className="text-white text-2xl hover:text-gray-400 transition" />
        </button>
      </div>

      {/* Dashboard Header */}
      <div className="px-6">
        <h2 className="text-3xl font-bold mb-8 text-center tracking-wider">
          Dashboard
        </h2>

        {/* Dashboard Categories */}
        <ul className="space-y-4">
          <li className="p-3 rounded-lg bg-blue-700 hover:bg-blue-600 transition cursor-pointer shadow-md text-center font-semibold">
            Gallery
          </li>
          <li className="p-3 rounded-lg bg-orange-500 hover:bg-orange-400 transition cursor-pointer shadow-md text-center font-semibold">
            Reunion
          </li>
          <li className="p-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition cursor-pointer shadow-md text-center font-semibold">
            Football Match
          </li>
          <li className="p-3 rounded-lg bg-orange-600 hover:bg-orange-500 transition cursor-pointer shadow-md text-center font-semibold">
            Picnic
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
