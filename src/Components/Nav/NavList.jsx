import { Link, NavLink } from "react-router-dom";
import NavDashBoard from "./NavDashBoard";

const NavList = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive ? "text-[#5bb543] " : ""
          }  hover:text-white hover:bg-[#5bb543] py-1 px-3 rounded`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `${
            isActive ? "text-[#5bb543] " : ""
          } hover:text-white hover:bg-[#5bb543] py-1 px-3 rounded`
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          `${
            isActive ? "text-[#5bb543] " : ""
          }  hover:text-white hover:bg-[#5bb543] py-1 px-3 rounded`
        }
      >
        AboutUs
      </NavLink>
      <NavDashBoard />
      
    </>
  );
};

export default NavList;
