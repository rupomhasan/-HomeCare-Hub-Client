import CommonBanner from "../../Components/common/CommonBanner";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import BookingCard from "./BookingCard";
import { PiArrowBendDoubleUpLeftBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { RiDeleteBinFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { FadeLoader } from "react-spinners";
import useBooking from "../../Hooks/useBooking";

const MyBookings = () => {
  const { user } = useAuth();
  const { refetch: countFetch } = useBooking();
  const email = user?.email;
  const axios = useAxios();
  const {
    data: bookings,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axios.get(`/user/bookings?email=${email}`);
      return res;
    },
  });
  const routesName = "My Bookings";

  const handleDeleteAll = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/user/clear-allBooking?email=${email}`)
          .then((res) => {
            if (res?.data?.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            countFetch();
            refetch();
          })
          .catch((error) => {});
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center my-10">
          <FadeLoader color="#5bb543" speedMultiplier={2} />{" "}
        </div>
      ) : (
        <div>
          <CommonBanner routesName={routesName} />

          <div className="max-w-screen-xl mx-auto my-20">
            <h2 className="text-left font-medium font-Teko text-[#5bb543] text-3xl md:text-5xl my-10 mx-3 md:m-10">
              My Bookings Services
            </h2>
            <div className=" mx-3 md:mx-10 grid gap-10">
              {bookings?.data?.map((item, idx) => {
                return (
                  <BookingCard bookedItem={item} key={idx} refetch={refetch} />
                );
              })}
            </div>
            <div className="md:flex space-y-5 justify-between m-10">
              <div>
                <Link
                  to="/services"
                  className="btn btn-sm text-white  bg-[#5bb543] rounded"
                >
                  <PiArrowBendDoubleUpLeftBold />
                  Get Services
                </Link>
              </div>
              <div>
                {bookings?.data.length > 0 && (
                  <button
                    onClick={handleDeleteAll}
                    className="btn btn-sm text-white  bg-red-500 rounded"
                  >
                    Clear All Services <RiDeleteBinFill className="text-xl" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyBookings;
