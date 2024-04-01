import { useParams } from "react-router-dom";
import CommonBanner from "../../Components/common/CommonBanner";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Aside from "./Aside";
import AboutSeller from "./AboutSeller";
import ServicePrice from "./ServicePrice";
import RelatedService from "./RelatedService";
import ProviderMaps from "./ProviderMaps";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Details = () => {
  const { id } = useParams();
  console.log(id);

  const axios = useAxios();
  const { data, isLoading } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      return await axios.get(`/service/${id}`);
    },
  });
  const {
    Category,
    Rating,
    Service_Image,
    Service_Name,
    Service_Price,
    Service_Description,
    Service_Provider,
    Total_Purchase,
    Service_Area,
  } = data?.data || {};

  console.log(data?.data);
  const routesName = "Service Details";
  return (
    <div className="">
      {isLoading ? (
        <div>
          <div>{data?.data?.body || <Skeleton count={6} />}</div>
        </div>
      ) : (
        <div>
          <CommonBanner routesName={routesName} />
          <div className="max-w-screen-xl mx-auto">
            <div className="my-20 mx-3 md:mx-10">
              <div className="lg:grid lg:grid-cols-3 ">
                <div className="col-span-2">
                  <Aside
                    photo={Service_Image}
                    name={Service_Name}
                    details={Service_Description}
                  />
                </div>
                <div className="flex justify-center">
                  <div className="space-y-10">
                    <ServicePrice
                      price={Service_Price}
                      provider={Service_Provider}
                      img={Service_Image}
                      name={Service_Name}
                    />

                    <AboutSeller
                      seller={Service_Provider}
                      rating={Rating}
                      order={Total_Purchase}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" mx-auto">
              <ProviderMaps props={Service_Area} />
            </div>
            <RelatedService category={Category} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
