import Lottie from "lottie-react";
import emptyService from "../../assets/Lottie/Nodata.json";
import { Link } from "react-router-dom";

const NoData = () => {
  return (
    <div className="h-fit max-w-screen-2xl mx-auto my-10 space-y-10">
      <Link
        to="/dashboard/addService"
        className="text-3xl md:text-5xl font-Teko font-semibold text-[#5bb543]"
      >
        Add New Service
      </Link>
      <Lottie className="h-[50vh]" animationData={emptyService} />
    </div>
  );
};

export default NoData;
