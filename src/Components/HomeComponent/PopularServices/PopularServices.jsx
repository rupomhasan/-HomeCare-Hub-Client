import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import ServiceCard from "../../Sheared/ServiceCard";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const PopularServices = () => {
  // done : http://localhost:5000/api/v1/services?page=1&limit=10
  const axios = useAxios();
  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("/services?page=1&limit=6");
      return res;
    },
  });
  console.log(services?.data);

  return (
    <div className="bg-[#f8f8f3] relative ">
      <div className="max-w-screen-xl mx-auto my-20 py-20 z-10">
        <div className="mx-10">
          <div className="space-y-2">
            <p className="bg-[url('https://serve-nextjs.vercel.app/_next/static/media/sub-title-before.7e8a1c0a.svg')]  text-[#5bb543] md:text-xl font-medium w-fit">
              Category
            </p>

            <h3 className="text-4xl font-semibold font-Teko text-left">
              Our Popular Services
            </h3>
          </div>
          <div className="grid mt-20 gap-10 md:grid-cols-2  lg:grid-cols-3 z-[100] ">
            {services?.data?.map((service, idx) => (
              <ServiceCard key={idx} service={service}></ServiceCard>
            ))}
          </div>
          <motion.button
            initial={{ color: "#5bb543", backgroundColor: "#fff" }}
            whileHover={{ color: "#fff", backgroundColor: "#5bb543" }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="btn rounded btn-sm  mt-10 border-[#5bb543]"
          >
            View All Services
            <FaArrowRightLong />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
