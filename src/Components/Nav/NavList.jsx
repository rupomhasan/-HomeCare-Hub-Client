import { Link, NavLink } from "react-router-dom";
import NavDashBoard from "./NavDashBoard";

const NavList = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-[#5bb543] " : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) => (isActive ? "text-[#5bb543] " : "")}
      >
        Services
      </NavLink>
      <NavLink
        to="/aboutUs"
        className={({ isActive }) => (isActive ? "text-[#5bb543] " : "")}
      >
        AboutUs
      </NavLink>
      <NavDashBoard />
    </>
  );
};

export default NavList;
