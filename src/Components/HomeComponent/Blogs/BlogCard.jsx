import { motion } from "framer-motion";
import { FaArrowRightLong, FaRegStar, FaStar } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  const {
    Offer,
    Service_Image,
    Rating: rating,
    Service_Price,
    Service_Provider,
    Service_Description,
    Service_Name,
  } = data;
  const { Logo } = Service_Provider;

  return (
    <div>
      <div className=" bg-base-100 shadow-md ">
        <div className="relative">
          <motion.button
            initial={{ color: "#fff", backgroundColor: "#FF0000" }}
            whileHover={{
              color: "#FF0000",
              backgroundColor: "#fff",
            }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="absolute btn z-10 border-none hover:bg-white hover:text-[#5bb543] btn-sm rounded right-3 top-3 "
          >
            {Offer}%OFF
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

            <div className=""></div>
          </figure>
        </div>
        <div className="card-body">
          <div className="flex gap-5 items-center">
            <div className="rounded-full bg-[#ffffff] border border-[#5bb543] py-4 px-2 ">
              <img className="mx-auto w-auto autofill" src={Logo} alt="" />
            </div>
            <div className="text-left">
              <motion.h3
                whileHover={{ color: "#5bb543" }}
                initial={{ color: "#000" }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="text-2xl font-Teko font-medium"
              >
                {Service_Name}
              </motion.h3>
              <div>
                <Rating
                  initialRating={rating}
                  emptySymbol={<FaRegStar className="text-lg text-[#FFDF00]" />}
                  fullSymbol={<FaStar className="text-lg text-[#FFDF00]" />}
                />
                <span>({rating}/5)</span>
              </div>
            </div>
          </div>

          <motion.p
            whileHover={{ color: "#5bb543" }}
            initial={{ color: "#808080" }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-left my-3 text-lg "
          >
            {Service_Description}
          </motion.p>
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

export default BlogCard;
