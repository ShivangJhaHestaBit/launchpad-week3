import React from "react";
import { FaTachometerAlt, FaBookOpen, FaLayerGroup, FaChartBar, FaTable } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-[100%] h-screen bg-gray-900 text-gray-300 flex flex-col p-4 space-y-6">
      <h1 className="text-xl font-semibold text-gray-200 mb-4">
        Start Bootstrap
      </h1>
      <div>
        <p className="text-xs text-gray-500 uppercase mb-2">CORE</p>
        <div className="flex items-center gap-3 p-2 bg-gray-800 text-white cursor-pointer">
          <FaTachometerAlt className="text-lg" />
          <span>Dashboard</span>
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-2">INTERFACE</p>
        <div className="flex items-center gap-3 p-2 hover:bg-gray-800">
          <FaLayerGroup className="text-lg" />
          <span>Layouts</span>
        </div>
        <div className="flex items-center gap-3 p-2 hover:bg-gray-800">
          <FaBookOpen className="text-lg" />
          <span>Pages</span>
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-2">ADDONS</p>
        <div className="flex items-center gap-3 p-2 hover:bg-gray-800">
          <FaChartBar className="text-lg" />
          <span>Charts</span>
        </div>
        <div className="flex items-center gap-3 p-2 hover:bg-gray-800">
          <FaTable className="text-lg" />
          <span>Tables</span>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
