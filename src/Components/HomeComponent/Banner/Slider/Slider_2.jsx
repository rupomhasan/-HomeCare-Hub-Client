import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slider_2 = ({ currentIndex }) => {
  const [isAnimate, setIsAnimate] = useState(false);
  useEffect(() => {
    if (currentIndex === 1) {
      return setIsAnimate(true);
    }
    setIsAnimate(false);
  }, [currentIndex]);
  return (
    <div className="relative text-white">
      <div className="max-w-screen-lg mx-auto flex flex-1 ">
        <div className="absolute z-10 lg:top-1/4 right-0 lg:-left-10">
          <div className=" grid gap-4 justify-center items-center mr-5">
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              animate={isAnimate ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 1.4,
                delay: 0.3,
                ease: "easeInOut",
              }}
              className="hidden  md:flex  justify-center font-bold mt-5"
            >
              <p className="bg-[#082545] p-1">100%</p>
              <p className="text-[#082545] bg-white  p-1">
                ECO-FRIENDLY HOME CARE SOLUTIONS
              </p>
            </motion.div>
            <motion.h3
              initial={{ x: -100, opacity: 0, scale: 0.3 }}
              animate={isAnimate ? { x: 0, opacity: 1, scale: 0.9 } : {}}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: "easeInOut",
              }}
              className="text-white md:text-5xl md:text-right"
            >
              Professional Cleaning
              <br /> Services Near You
            </motion.h3>
          </div>
          <motion.button
            initial={{ y: -80, opacity: 0 }}
            animate={isAnimate ? { y: 0, opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 1.4,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="btn btn-outline hover:border-none md:mt-5 border-2 border-white btn-sm md:btn-md text-white hover:bg-[#5bb543] rounded"
          >
            All Services
          </motion.button>
        </div>
      </div>
      <img
        src="https://quanticalabs.com/CleanMate/Template/images/slider/image_02.jpg"
        alt=""
      />
    </div>
  );
};

export default Slider_2;
