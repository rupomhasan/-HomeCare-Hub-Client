import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import useBooking from "../../Hooks/useBooking";

const NavSide = () => {
  const { userLogOut } = useAuth();
  const axios = useAxios();
  const { totalBooking } = useBooking();

  const handleLogOut = () => {
    userLogOut().then(axios.delete("/auth/clear-cookie"));
    window.location.reload();
  };

  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <Link
          to="/myBookings"
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">
              {totalBooking}
            </span>
          </div>
        </Link>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/dashboard" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/setting">Settings</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavSide;
