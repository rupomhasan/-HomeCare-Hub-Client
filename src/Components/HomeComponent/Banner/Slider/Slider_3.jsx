import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slider_3 = ({ currentIndex }) => {
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    if (currentIndex === 2) {
      return setIsAnimate(true);
    }
    setIsAnimate(false);
  }, [currentIndex]);
  return (
    <div className="relative text-white">
      <div className="max-w-screen-lg mx-auto flex flex-1 ">
        <div className="absolute z-10 lg:top-1/4 right-0 lg:right-40 ">
          <div className=" grid gap-4 justify-center mr-5">
            <motion.div
              initial={{ y: -70, opacity: 0 }}
              animate={isAnimate ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: "easeInOut",
              }}
              className="hidden  md:flex justify-end font-bold mt-5"
            >
              <p className="bg-[#082545] p-1">100%</p>
              <p className="text-[#082545] bg-white  p-1">
                ECO-FRIENDLY HOME CARE SOLUTIONS
              </p>
            </motion.div>
            <motion.h3
              initial={{ y: -70, opacity: 0 }}
              animate={isAnimate ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="text-white md:text-5xl  md:text-right"
            >
              Immaculate Cleaning <br /> Transform Your Space
            </motion.h3>
          </div>
          <motion.button
            initial={{ y: -70, opacity: 0 }}
            animate={isAnimate ? { y: 0, opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.7,
              ease: "easeInOut",
            }}
            className="btn btn-outline hover:border-none md:mt-5 border-2 border-white btn-sm md:btn-md text-white hover:bg-[#5bb543] rounded"
          >
            Popular Services
          </motion.button>
        </div>
      </div>
      <img
        src="https://quanticalabs.com/CleanMate/Template/images/slider/image_03.jpg"
        alt=""
      />
    </div>
  );
};

export default Slider_3;
