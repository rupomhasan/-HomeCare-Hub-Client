import { motion } from "framer-motion";

const CategoryCard = ({ categoryData }) => {
  const { image, category, totalService } = categoryData;
  return (
    <div className=" mx-2 lg:mx-4 overflow-hidden rounded">
      <div className="overflow-hidden">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            delay: 0.06,
            duration: 0.3,
          }}
          className=""
          src={image}
          alt={category}
        />
      </div>
      <div className="py-5  border border-[#def7d8]">
        <h3 className="text-3xl font-medium font-Teko">{category}</h3>
        <p className="text-lg text-[#5bb543]">{totalService} Services</p>
      </div>
    </div>
  );
};

export default CategoryCard;
