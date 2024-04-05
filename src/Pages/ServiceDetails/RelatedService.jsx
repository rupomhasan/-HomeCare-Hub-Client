import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import Slider from "react-slick";
import RelatedCard from "./ReltedCard";
import { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedService = ({ category }) => {
  const axios = useAxios();
  let sliderRef = useRef(null);

  const { data } = useQuery({
    queryKey: ["related"],
    queryFn: async () => {
      return await axios.get(`/services?category=${category}`);
    },
  });

  const settings = {
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-20">
      <div className="flex justify-between mx-5 items-center">
        <h3 className="text-3xl text-left  font-Teko font-semibold ">
          Related Services
        </h3>
        <div className="flex gap-6">
          <button
            onClick={() => sliderRef?.current?.slickPrev()}
            className="btn btn-sm rounded bg-[#5bb543] hover:bg-[#1f7e05] text-white"
          >
            <IoIosArrowBack className="text-2xl" />
          </button>
          <button
            onClick={() => sliderRef?.current?.slickNext()}
            className="btn btn-sm rounded bg-[#5bb543] hover:bg-[#1f7e05] text-white"
          >
            <IoIosArrowForward className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden mx-2">
        <Slider ref={sliderRef} {...settings}>
          {data?.data?.map((item, idx) => (
            <RelatedCard key={idx} data={item}></RelatedCard>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedService;
