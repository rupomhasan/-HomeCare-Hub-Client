import { CiMail } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";
import { FadeLoader } from "react-spinners";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import NoData from "../../Components/Shared/NoData";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";

const MyBookedServices = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [status, setStatus] = useState("pending");
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["myServices"],
    queryFn: async () => {
      return await axios.get(`/customer/bookings?email=${user.email}`);
    },
  });

  const handleUpdateInfo = (id) => {
    axios
      .put(`/update/booking/${id}?email=${user.email}`, { status })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast(`service is  ${status} `);
          refetch();
        }
      });
  };
  return (
    <div>
      {!isLoading ? (
        data?.data?.length === 0 ? (
          <NoData />
        ) : (
          <div className=" overflow-auto bg-[url('https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/choose-us-bg3.jpg')] bg-cover  bg-sky-100 bg-blend-multiply py-10">
            <div className="max-w-screen-xl mx-auto">
              <div className="my-7">
                <h3 className="text-4xl font-Teko text-center font-medium">
                  My Booked Services
                </h3>
              </div>
              <div>
                <table className="table  ">
                  <thead>
                    <tr className="text-lg uppercase text-black">
                      <th>Image</th>
                      <th>Service Info</th>
                      <th>Customer Info</th>
                      <th>Option</th>
                      <th>Update</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {data?.data?.map((service, idx) => (
                      <tr key={idx} className="text-[16px] border-2">
                        <td>
                          <img className="w-28" src={service?.img} />
                        </td>
                        <td className="font-medium space-y-2">
                          <p className="card-title text-[#5bb543]">
                            {service.name}
                          </p>
                          <p className="flex items-center   font-bold text-gray-500 ">
                            <TbCurrencyTaka className="text-2xl" />
                            {service.price}
                          </p>
                        </td>
                        <td className="font-medium space-y-2  ">
                          <p className="card-title text-[#5bb543]">
                            {service?.customer?.customerName}
                          </p>
                          <p className="font-bold text-gray-500 gap-2 flex items-center">
                            <CiMail className="text-xl " />
                            {service?.customer?.email}
                          </p>
                        </td>

                        <td className="font-medium grid  justify-center space-y-2 ">
                          <select
                            onBlur={(e) => setStatus(e.target.value)}
                            className=" py-1 rounded bg-[#5bb543] text-white"
                          >
                            <option value="pending">
                              {service?.customer?.status}
                            </option>
                            <option value="Conformed">Conformed</option>
                            <option value="cancel">Cancel</option>
                          </select>
                        </td>
                        <td>
                          <p>{service?.customer?.date}</p>
                          <button
                            onClick={() => handleUpdateInfo(service?._id)}
                            className="btn btn-sm rounded  bg-[#5bb543] text-white hover:bg-[#207c07]"
                          >
                            Submit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="flex justify-center my-10">
          <FadeLoader color="#5bb543" />
        </div>
      )}
    </div>
  );
};

export default MyBookedServices;
