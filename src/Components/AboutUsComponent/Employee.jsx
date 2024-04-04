import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import Slider from "react-slick";
import EmployeeCard from "./EmployeeCard";
import { motion } from "framer-motion";
import { FadeLoader } from "react-spinners";

const Employee = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { data: employee, isLoading } = useQuery({
    queryKey: ["employee"],
    queryFn: async () => {
      return await axios.get(`/employee?email=${user.email}`);
    },
  });

  console.log(employee?.data);

  const settings = {
    slidesToShow: 6,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3500,

    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 6,
        },
      },
    ],
  };

  return (
    <div>
      {isLoading ? (
        <div>
          {" "}
          <div className="flex justify-center my-10">
            <FadeLoader color="#5bb543" speedMultiplier={2} />{" "}
          </div>
        </div>
      ) : (
        <div className="bg-[url('https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/choose-us-bg3.jpg')] bg-cover py-20 ">
          <div className="max-w-screen-xl mx-auto">
            <div className="my-5 space-y-3 ">
              <h2 className="font-Teko text-5xl font-medium">
                {" "}
                Meet Our Specialist
              </h2>
              <motion.p
                whileHover={{ color: "#5bb543" }}
                initial={{ color: "#808080" }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className=" max-w-2xl mx-auto"
              >
                Behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in
                Bookmarks grove right
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <Slider {...settings}>
                {employee?.data.map((member, idx) => (
                  <div key={idx} className="px-3">
                    <EmployeeCard data={member}></EmployeeCard>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee;
