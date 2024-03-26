import { IoMdMenu } from "react-icons/io";
import Logo from "../common/Logo";
import NavList from "./NavList";
import NavSide from "./ NavSide";
import NavLogin from "./NavLogin";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isStick, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const user = true;
  return (
    <>
      <motion.div
        className={`max-w-screen-xl my-2  mx-auto  navbar rounded-3xl ${
          isStick
            ? "fixed z-10 bg-base-200 inset-x-0 flex justify-center   "
            : "static"
        }`}
        initial={{ y: -60 }}
        animate={{ y: isStick ? 0 : 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "tween",
          ease: isStick ? "easeIn" : "linear",
        }}
      >
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
      </motion.div>
    </>
  );
};

export default Navbar;
