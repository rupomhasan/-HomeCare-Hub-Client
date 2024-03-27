import { motion } from "framer-motion";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import Rating from "react-rating";

const ServiceCard = ({ service }) => {
  const {
    Category,
    Service_Image,
    Rating: rating,
    Service_Price,
    Service_Provider,
    Service_Name,
  } = service;
  const {  Logo } = Service_Provider;

  return (
    <div>
      <div className=" bg-base-100 shadow-md ">
        <div className="relative">
          <motion.button
            initial={{ color: "#fff", backgroundColor: "#5bb543" }}
            whileHover={{ color: "#5bb543", backgroundColor: "#fff" }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="absolute btn z-10 border-none hover:bg-white hover:text-[#5bb543] btn-sm rounded left-3 top-3 "
          >
            {Category}
          </motion.button>
          <figure className="overflow-hidden  ">
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                delay: 0.1,
                duration: 0.39,
              }}
              src={Service_Image}
              alt="Shoes"
            />
            <div className="absolute right-1/2 -mr-5  transform -translate-y-1/2 rounded-full bg-base-200 py-4 px-2 ">
              <img className="mx-auto w-auto autofill:" src={Logo} alt="" />
            </div>
            <div className="  "></div>
          </figure>
        </div>
        <div className="card-body">
          <div>
            <Rating
              initialRating={rating}
              emptySymbol={<FaRegStar className="text-lg text-[#FFDF00]" />}
              fullSymbol={<FaStar className="text-lg text-[#FFDF00]" />}
            />
            <span>({rating}/5)</span>
          </div>

          <h3>{}</h3>
          <motion.h2
            whileHover={{ color: "#5bb543" }}
            initial={{ color: "#000" }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="card-title"
          >
            {Service_Name}
          </motion.h2>
          <div className="card-actions justify-between items-center text-[#5bb543]  font-semibold font-Teko">
            <div className="flex  items-center font-medium">
              <TbCurrencyTaka className="text-xl" />
              <span className="text-3xl">{Service_Price}</span>
            </div>
            <Link className="text-xl">
              View Details <FaArrowRightLong className="badge badge-outline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
