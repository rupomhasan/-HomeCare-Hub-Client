import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Slider from "react-slick";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:25000/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
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
  };
  return (
    <div className="max-w-screen-xl mx-auto overflow-hidden py-10 px-2 md:px-5">
      <div className="text-left ml-12 my-8 space-y-3">
        <p className="bg-[url('https://serve-nextjs.vercel.app/_next/static/media/sub-title-before.7e8a1c0a.svg')] text-[#5bb543] md:text-xl font-medium w-fit">
          Category
        </p>
        <h3 className="text-2xl md:text-5xl font-Teko font-semibold  ">
          See our All Creative Services
        </h3>
      </div>
      <Slider {...settings}>
        {categories?.map((category, idx) => (
          <CategoryCard key={idx} categoryData={category}></CategoryCard>
        ))}
      </Slider>
    </div>
  );
};

export default AllCategories;
