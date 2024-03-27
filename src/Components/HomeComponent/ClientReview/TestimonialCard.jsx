import { motion } from "framer-motion";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { MdDateRange } from "react-icons/md";

const TestimonialCard = ({ data }) => {
  const { description, name, photoUrl, rating, reviewDate } = data;

  return (
    <div className="bg-[#ffffff] py-8 mx-4  ">
      <div className="space-y-5 px-5 ">
        <div className="grid md:grid-cols-2 gap-2 overflow-hidden justify-between items-center">
          <div className="overflow-hidden">
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-40"
              src={photoUrl}
              alt=" "
            />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-medium font-Teko">{name}</h3>
            <Rating
              readonly
              initialRating={rating}
              emptySymbol={<FaRegStar className="text-lg text-[#FFDF00]" />}
              fullSymbol={<FaStar className="text-lg text-[#FFDF00]" />}
            />
            <p className="flex items-center gap-1 font-bold text-gray-500">
              <MdDateRange className="text-lg" />
              {reviewDate}
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-left">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
