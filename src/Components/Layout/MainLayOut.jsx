import NavList from "../Nav/NavList";
import Logo from "../common/Logo";
import NavLogin from "../Nav/NavLogin";
import Footer from "../Footer/Footer";
import Navbar from "../Nav/Navbar";

const MainLayOut = ({ children }) => {
  return (
    <div className=" font-Rubik">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          {/* Navbar */}
          <Navbar />
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
