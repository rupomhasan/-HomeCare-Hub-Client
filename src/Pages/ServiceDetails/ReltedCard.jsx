import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const RelatedCard = ({ data }) => {
  const { Service_Image, Service_Price, Service_Name, _id } = data;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl m-5">
        <figure>
          <img src={Service_Image} alt="service" />
        </figure>
        <div className="card-body">
          <motion.h2
            whileHover={{ color: "#5bb543" }}
            initial={{ color: "#000" }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="card-title"
          >
            {Service_Name}
          </motion.h2>
          <div className="card-actions justify-end">
            <p className="flex items-center text-3xl text-[#5bb543] font-semibold font-Teko">
              <TbCurrencyTaka className="text-xl" />
              {Service_Price}
            </p>
            <Link to={`/service/${_id}`} className="text-xl">
              View Details <FaArrowRightLong className="badge badge-outline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedCard;
