import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const NavDashBoard = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        <ul className="flex gap-3 items-center hover:text-white hover:bg-[#5bb543] py-1 px-3 rounded">
          <li className="  ">Dashboard</li>
          <IoIosArrowDown className="text-xl" />
        </ul>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to="/dashboard/myServices">My Provided Service</Link>
        </li>
        <li>
          <Link to="/dashboard/myBookedServices">My Booked Services</Link>
        </li>
        <li>
          <Link to="/dashboard/addService">Add New Service</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavDashBoard;
