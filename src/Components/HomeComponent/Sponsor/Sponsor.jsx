import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Sponsor = () => {
  const axios = useAxios();

  const { data: sponsor } = useQuery({
    queryKey: ["sponsor"],
    queryFn: async () => {
      const res = await axios.get("/sponsor");
      return res;
    },
  });

  const settings = {
    // dots: true,
    infinity: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 5,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };


  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mx-10">
        <div className="flex justify-between items-center">
          <div className="text-left my-8 space-y-3">
            <h3 className="text-2xl md:text-5xl font-Teko font-semibold  ">
              Introducing Our Newest Sponsor
            </h3>
          </div>
          <Link className="flex items-center gap-2 text-xl font-semibold text-[#5bb543] font-Teko">
            Vew All Services
            <FaArrowRight className="border p-1 rounded-full text-3xl border-[#5bb543]" />
          </Link>
        </div>
        <div className="overflow-hidden my-2 mb-10">
          <Slider {...settings} className="">
            {sponsor?.data.map((item, idx) => (
              <div key={idx} className="grid grid-rows-2">
                <motion.img
                  initial={{ skew: 1 }}
                  whileHover={{ skew: 2 }}
                  className="px-3 "
                  src={item.logo}
                  alt=""
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
