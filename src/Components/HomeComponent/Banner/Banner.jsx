import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Slider_1 from "./Slider/Slider_1";
import Slider_2 from "./Slider/Slider_2";
import Slider_3 from "./Slider/Slider_3";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: handleSlideChange,
  };
  return (
    <div className=" relative overflow-hidden">
      <div className="absolute  right-3 bottom-4    flex gap-4 z-10  ">
        <button
          onClick={() => sliderRef.slickPrev()}
          className="btn btn-xs rounded"
        >
          <IoIosArrowBack className="text-xl" />
        </button>
        <button
          onClick={() => sliderRef.slickNext()}
          className="btn btn-xs rounded"
        >
          <IoIosArrowForward className="text-xl" />
        </button>
      </div>

      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <Slider_1 currentIndex={currentIndex} />
        <Slider_2 currentIndex={currentIndex} />
        <Slider_3 currentIndex={currentIndex} />
      </Slider>
    </div>
  );
};

export default Banner;
