import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Slider from "react-slick";
import useAxios from "../../../Hooks/useAxios";
import CustomDots from "../../../Utility/CustomDots";

const AllCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [settings, setSettings] = useState({});
  const axios = useAxios();

  useEffect(() => {
    axios.get("/categories").then((res) => setCategories(res.data));
  }, [axios]);

  useEffect(() => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      currentSlide: currentIndex,
      responsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
      beforeChange: (oldIdx, newIdx) => setCurrentIndex(newIdx),
    };

    setSettings(settings);
  }, [currentIndex]);
  //   i try hard to change the data by click but i failed...
  // const CustomDots = (dots) => {
  //   return (
  //     <ul className="flex justify-center mt-4">
  //       {dots.map((dot, idx) => (
  //         <li className="" key={idx} onClick={() => setCurrentIndex(idx)}>
  //           {currentIndex === idx ? (
  //             <FaRegCircleDot className="text-[#5bb543]" />
  //           ) : (
  //             <FaRegCircle />
  //           )}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  return (
    <div className="max-w-screen-xl mx-auto overflow-hidden py-10">
      <div className="mx-8">
        <div className="text-left my-8 space-y-3">
          <p className="bg-[url('https://serve-nextjs.vercel.app/_next/static/media/sub-title-before.7e8a1c0a.svg')] text-[#5bb543] md:text-xl font-medium w-fit">
            Category
          </p>
          <h3 className="text-2xl md:text-5xl font-Teko font-semibold  ">
            See our All Creative Services
          </h3>
        </div>
        <Slider
          className="pb-5"
          {...settings}
          appendDots={(dots) => (
            <CustomDots
              dots={dots}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          )}
        >
          {categories?.map((category, idx) => (
            <CategoryCard key={idx} categoryData={category}></CategoryCard>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AllCategories;
