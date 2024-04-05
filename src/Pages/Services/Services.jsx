import { useQuery } from "@tanstack/react-query";
import CommonBanner from "../../Components/common/CommonBanner";
import useAxios from "../../Hooks/useAxios";
import ServiceCard from "../../Components/Shared/ServiceCard";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FadeLoader } from "react-spinners";

// done : http://localhost:5000/api/v1/services?category=Gardening

const Services = () => {
  const routesName = "Our Services";
  const [categoryName, setCategoryName] = useState("");
  const [page, setPage] = useState(1);
  const axios = useAxios();
  const { totalServices } = useLoaderData();

  const { data: services, isLoading } = useQuery({
    queryKey: ["services", categoryName, page],
    queryFn: async () => {
      const res = await axios.get(
        `/services?page=${page}&limit=10&category=${categoryName}`
      );
      return res;
    },
  });
  const { data: category } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axios.get("/categories");
      return res;
    },
  });
  const limit = 10;
  const totalPage = Math.ceil(totalServices / limit);
  const handlePrev = () => {
    if (1 < page) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      {isLoading ? (
        <div>
          <FadeLoader color="#5bb543" />
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto">
          <CommonBanner routesName={routesName} />
          <div className="flex m-10 ">
            <select
              onChange={(e) => setCategoryName(e.target.value)}
              className="px-5 py-2 rounded border"
            >
              <option>Select Category</option>
              {category?.data?.map((item, idx) => (
                <option key={idx}>{item.category}</option>
              ))}
            </select>
          </div>
          <div className="grid my-20 mx-10 gap-10 md:grid-cols-2  lg:grid-cols-3 z-[100] ">
            {services?.data?.map((service, idx) => (
              <ServiceCard key={idx} service={service}></ServiceCard>
            ))}
          </div>

          <div className="join mb-10">
            <button
              onClick={handlePrev}
              className="join-item btn btn-sm rounded"
            >
              <MdKeyboardDoubleArrowLeft className="text-2xl" />
            </button>
            {Array(totalPage)
              .fill(0)
              .map((item, idx) => {
                const pageNumber = idx + 1;

                return (
                  <button
                    onClick={() => setPage(pageNumber)}
                    className={` ${
                      pageNumber === page ? "bg-[#5bb543] text-white" : ""
                    } btn btn-sm join-item`}
                    key={pageNumber}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            <button
              onClick={handleNext}
              className="join-item btn btn-sm rounded"
            >
              <MdKeyboardDoubleArrowRight className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
