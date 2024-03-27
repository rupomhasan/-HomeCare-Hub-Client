import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowRight, HiRadio } from "react-icons/hi2";
import { HiArrowLeft } from "react-icons/hi2";

import { useRef, useState } from "react";
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const axios = useAxios();
  const sliderRef = useRef(null);
  const { data: reviews } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axios.get("/user/review");
      return res;
    },
  });

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };
  const play = () => {
    sliderRef.current.slickPlay();
  };
  console.log("reviews", reviews);
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    afterChange: handleSlideChange,

    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="my-20 py-20 bg-[url('https://serve-nextjs.vercel.app/_next/static/media/testimonial-slider-bg.69c850ae.png')] bg-cover bg-[#48b5430d]">
      <div className="max-w-screen-lg mx-auto">
        <div className="space-y-2 mb-10 ">
          <div className="flex justify-center">
            <p className="bg-[url('https://serve-nextjs.vercel.app/_next/static/media/sub-title-before.7e8a1c0a.svg')]  text-[#5bb543] md:text-xl font-medium w-fit ">
              Testimonial
            </p>
          </div>

          <h3 className="text-3xl text-center md:text-4xl font-semibold font-Teko ">
            Our Client Say About Us
          </h3>
        </div>
        <div className="overflow-hidden mx-5  ">
          <Slider {...settings} ref={sliderRef}>
            {reviews?.data?.map((review, idx) => (
              <TestimonialCard key={idx} data={review} />
            ))}
          </Slider>
        </div>
        <div className="flex justify-center gap-10 mt-10">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="btn rounded-md  btn-sm bg-[#5bb543]  hover:bg-[#31b40d] text-white"
          >
            <HiArrowLeft className="text-xl " />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="btn btn-sm bg-[#5bb543] hover:bg-[#31b40d] rounded-md text-white"
          >
            <HiArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
