import { useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

const Blogs = () => {
  const axios = useAxios();
  const [limit, setLimit] = useState(2);
  const { data: offerService, isLoading } = useQuery({
    queryKey: ["offer", limit],
    queryFn: async () => {
      const res = await axios.get(`/services?Offer=Offer&limit=${limit}`);
      return res;
    },
  });

  const { data: totalOffer } = useQuery({
    queryKey: ["totaloffer", limit],
    queryFn: async () => {
      return await axios.get(
        "http://localhost:2000/api/v1/offer/count?Offer=Offer"
      );
    },
  });
  return (
    <div>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div className="bg-[#f5fffd]">
          <div className="max-w-screen-xl mx-auto py-20 mb-20">
            <div className="mx-10">
              <div className="flex justify-between items-center">
                <div className="text-left my-8 space-y-3">
                  <p className="bg-[url('https://serve-nextjs.vercel.app/_next/static/media/sub-title-before.7e8a1c0a.svg')] text-[#5bb543] md:text-xl font-medium w-fit">
                    Offered
                  </p>
                  <h3 className="text-2xl md:text-5xl font-Teko font-semibold  ">
                    Best Offered Services
                  </h3>
                </div>
                <Link
                  to="/services"
                  className="flex items-center gap-2 text-xl font-semibold text-[#5bb543] font-Teko"
                >
                  Vew All Services
                  <FaArrowRight className="border p-1 rounded-full text-3xl border-[#5bb543]" />
                </Link>
              </div>
              <div className="grid md:grid-cols-2  gap-10">
                {offerService?.data?.map((data, idx) => (
                  <BlogCard key={idx} data={data} />
                ))}
              </div>
            </div>
            <div className="mt-10">
              {limit === 2 ? (
                <motion.button
                  className="btn btn-sm rounded border-[#5bb543]"
                  initial={{ color: "#5bb543", backgroundColor: "#fff" }}
                  whileHover={{ color: "#fff", backgroundColor: "#5bb543" }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                  onClick={() => setLimit(totalOffer?.data?.result)}
                >
                  Show All
                </motion.button>
              ) : (
                <motion.button
                  initial={{ color: "#5bb543", backgroundColor: "#fff" }}
                  whileHover={{ color: "#fff", backgroundColor: "#5bb543" }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                  onClick={() => setLimit(2)}
                  className="btn btn-sm rounded border-[#5bb543]"
                >
                  Show Less
                </motion.button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
