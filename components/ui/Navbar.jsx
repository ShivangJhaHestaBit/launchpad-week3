import React from "react";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-[100%] bg-gray-900 h-[100%] px-4 flex items-center justify-between">
      <button
        type="button"
        className="text-gray-300 hover:text-white text-xl">
        <FaBars />
      </button>
      <div className="flex gap-4 h-[67%] w-[30%] min-w-60 justify-between">
        <div className="flex w-[90%]">
          <input
            type="text"
            placeholder="Search"
            className=" w-[90%] h-[100%] px-3 py-2 rounded-l-md bg-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-[10%] h-[100%] bg-blue-600 px-3 py-2.5 hover:bg-blue-700 rounded-r-md text-white min-w-10"
          >
            <FaSearch className=""/>
          </button>
        </div>
        <button
          type="button"
          className="text-gray-300 hover:text-white text-xl w-[10%]"
        >
          <FaUser/>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
