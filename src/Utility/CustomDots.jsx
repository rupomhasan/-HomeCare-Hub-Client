import React from "react";
import { FaRegCircle, FaRegCircleDot } from "react-icons/fa6";

const CustomDots = ({ dots, currentIndex, setCurrentIndex }) => {
  return (
    <ul className="flex justify-center mt-4">
      {dots.map((dot, idx) => (
        <li className=" mx-1" key={idx} onClick={() => setCurrentIndex(idx)}>
          {currentIndex === idx ? (
            <FaRegCircleDot className="text-[#5bb543]" />
          ) : (
            <FaRegCircle className="text-[#5bb543]" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default CustomDots;
