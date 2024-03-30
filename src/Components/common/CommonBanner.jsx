import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const CommonBanner = ({ routesName }) => {
  return (
    <div className="bg-[url('https://serve-nextjs.vercel.app/_next/static/media/breadcrumbs-bg.20246d55.png')] h-[50vh] bg-cover flex justify-center items-center">
      <div className="text-white flex flex-col w-full">
        <h3 className="text-4xl md:text-6xl font-Teko font-semibold ">
          {routesName}
        </h3>
        <div className="flex items-center justify-center text-xl">
          <Link to="/" className="text-[#5bb543] my-2 gap-3">
            Home
          </Link>
          <div>
            <IoIosArrowForward />
          </div>
          <p>{routesName}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
