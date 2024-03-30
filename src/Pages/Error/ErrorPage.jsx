import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
// import errorData from "../../assets/Lottie/Login.json";
import errorAnimation from "../../assets/Lottie/Error.json";
const ErrorPage = () => {
  return (
    <div>
      <motion.button
        initial={{ color: "#fff", backgroundColor: "#5bb543" }}
        whileHover={{ color: "#5bb543", backgroundColor: "#fff" }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="absolute btn z-10 hover:border-[#5bb543] hover:border-2 hover:bg-white hover:text-[#5bb543] btn-sm rounded left-3 top-3 "
      >
        <TiArrowBack className="text-2xl " />
        <Link className="text-2xl font-Teko font-medium " to="/">
          {" "}
          Back To Home
        </Link>
      </motion.button>
      <div className="mx-auto">
        <div className="flex justify-center items-center h-[100vh]">
          <Lottie
            className="max-h-[80vh] max-w-[80vw] "
            animationData={errorAnimation}
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
