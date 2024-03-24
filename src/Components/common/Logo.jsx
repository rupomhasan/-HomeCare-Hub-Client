import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex   items-center j font-Teko">
      <div className="w-8">
        <img
          className=""
          src="https://i.ibb.co/q959Mp6/icons8-setting-50.png"
          alt="logo"
        />
      </div>
      <div className="flex gap-2 mt-2 text-2xl">
        <p className="text-">
          <span className="text-3xl font-bold text-[#5bb543]">H</span>ome
          <span className="font-bold text-3xl text-[#5bb543]">C</span>are
        </p>
      </div>
    </Link>
  );
};

export default Logo;
