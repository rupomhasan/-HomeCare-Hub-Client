import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";

const EmployeeCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { image, status, name } = data;
  return (
    <div
      className="relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt="" />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute bottom-0 left-0  bg-blue-600 bg-opacity-50 w-full h-full py-5 text-white"
          >
            <motion.div
              initial={{ opacity: 1 }}
              className=" flex flex-col justify-center items-center h-full space-y-2 "
            >
              <h2 className="text-sm">{name}</h2>
              <h2 className=" text-xs font-bold ">{status}</h2>
              <div className="flex gap-1 items-center">
                <TiSocialFacebook className="text-4xl bg-sky-600 rounded-full text-white link" />
                <FaTwitter className="text-4xl bg-sky-500 rounded-full p-2 text-white link" />
                <FaInstagram className="text-4xl text-[#fbad50] link" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmployeeCard;
