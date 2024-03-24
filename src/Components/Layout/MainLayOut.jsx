import React from "react";
import { IoMdMenu } from "react-icons/io";
import NavList from "../Nav/NavList";

import Logo from "../common/Logo";
import NavLogin from "../Nav/NavLogin";
import NavSide from "../Nav/ NavSide";
import Footer from "../Footer/Footer";
const MainLayOut = ({ children }) => {
  let user = false;

  return (
    <div className=" font-Rubik">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-200 rounded-3xl hover:bg-green-100">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-sm btn-square btn-ghost"
              >
                <IoMdMenu className="text-xl" />
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Logo />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu space-x-8 font-bold menu-horizontal">
                <NavList />
              </ul>
            </div>
            {user ? <NavSide /> : <NavLogin />}
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu text-left space-y-5 p-4 w-56 min-h-full bg-base-200 font-semibold pt-10 ">
            <Logo />
            <NavList />
            <NavLogin />
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayOut;
