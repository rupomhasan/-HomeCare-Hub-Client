import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const NavDashBoard = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        <ul className="flex gap-3 items-center">
          <li className="">Dashboard</li>
          <IoIosArrowDown className="text-xl" />
        </ul>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link>My-Service</Link>
        </li>
        <li>
          <Link>Add-Service</Link>
        </li>
        <li>
          <Link>My-Schedules</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavDashBoard;
