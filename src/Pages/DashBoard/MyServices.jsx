import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { AiFillDelete } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { IoBagAddOutline } from "react-icons/io5";
import { FadeLoader } from "react-spinners";
import NoData from "../../Components/Shared/NoData";
const MyServices = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["myServices"],
    queryFn: async () => {
      return await axios.get(`/services?email=${user.email}`);
    },
  });
  const handleDeleteAll = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`/clear-allServices?email=${user?.email}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`/clear-service/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      {!isLoading ? (
        data?.data?.length === 0 ? (
          <NoData />
        ) : (
          <div className="  bg-[url('https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/choose-us-bg3.jpg')] bg-cover  bg-sky-100 bg-blend-multiply py-10">
            <div className="max-w-screen-xl mx-auto">
              <div className="my-7">
                <h3 className="text-4xl font-Teko text-center font-medium">
                  My Provided Service
                </h3>
              </div>
              <div>
                <table className="table  ">
                  <thead>
                    <tr className="text-lg uppercase text-black">
                      <th>Image</th>
                      <th>Service Info</th>
                      <th>Provider Info</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {data?.data?.map((service, idx) => (
                      <tr key={idx} className="text-[16px] border-2">
                        <td>
                          <img className="w-28" src={service?.Service_Image} />
                        </td>
                        <td className="font-medium space-y-2">
                          <p className="card-title text-[#5bb543]">
                            {service.Service_Name}
                          </p>
                          <p className="flex items-center   font-bold text-gray-500 ">
                            <TbCurrencyTaka className="text-2xl" />
                            {service.Service_Price}
                          </p>
                        </td>
                        <td className="font-medium space-y-2  ">
                          <p className="card-title text-[#5bb543]">
                            {service?.Service_Provider?.Name}
                          </p>
                          <p className="font-bold text-gray-500 gap-2 flex items-center">
                            <CiMail className="text-xl " />
                            {service?.Service_Provider?.Email}
                          </p>
                        </td>

                        <td className="font-medium grid  justify-center space-y-2">
                          <Link to={`/dashboard/updateService/${service._id}`}>
                            <FaEdit className="mx-auto text-2xl text-[#5bb543]" />
                          </Link>

                          <AiFillDelete
                            onClick={() => handleDelete(service._id)}
                            className="mx-auto text-2xl text-red-700"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-between m-5 ">
                  <Link to="/dashboard/addService">
                    <div className="flex text-2xl font-Teko font-medium w-fit  gap-2 items-center btn btn-sm bg-[#5bb543] rounded text-white hover:bg-[#196405] ">
                      <IoBagAddOutline className="mx-auto text-xl" />
                      <p>Add Service</p>
                    </div>
                  </Link>
                  <div
                    onClick={handleDeleteAll}
                    className={`${
                      data?.data?.length > 0 ? "" : "hidden"
                    } flex text-2xl font-Teko font-medium w-fit  gap-2 items-center btn btn-sm bg-[#5bb543] rounded text-white hover:bg-[#196405] `}
                  >
                    <AiFillDelete className="mx-auto text-2xl text-red-700" />
                    <p>Clear All Service</p>
                  </div>
                </div>
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

export default MyServices;
