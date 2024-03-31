import { TbCurrencyTaka } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const BookingCard = ({ bookedItem, refetch }) => {
  const { customer, provider, name, price, img, _id } = bookedItem;
  const axios = useAxios();
  const { address, customerName, date, email, status, number } = customer;
  const { Email, Name, Image } = provider;
  const handleDeleteCart = (id) => {
    console.log(id);
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
          .delete(`/user/clear-booking/${id}?email=${email}`)
          .then((res) => {
            console.log(res.data);
            if (res?.data?.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Service has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };
  return (
    <div className="relative">
      <div className=" md:card md:card-side md:w-fit mx-auto bg-base-100 shadow-xl">
        <figure className="flex flex-col">
          <img src={img} className="w-60 md:w-80" alt="service" />
          <div className=" p-5">
            <h2 className="card-title ">{name}</h2>
            <p className="flex items-center text-left mt-2 text-lg font-medium">
              Service Charge : <TbCurrencyTaka />
              <span className="text-2xl  font-Teko text-[#5bb543]">
                {price}
              </span>
            </p>
            <div className="flex gap-2 items-center text-xl font-semibold">
              <p>Status : </p>
              <button
                className={`badge text-xl rounded-lg md:px-5 py-3  font-Teko  ${
                  status !== "Conformed"
                    ? status === "pending"
                      ? "bg-blue-500 text-white"
                      : "bg-red-500"
                    : "bg-[#5bb543] text-white"
                }`}
              >
                {status}
              </button>
            </div>
          </div>
        </figure>
        <div className=" px-2 md:px-8 py-3">
          <div>
            <div>
              <h2 className="text-left font-semibold font-Teko text-3xl underline mb-3 text-[#5bb543] ">
                Provider
              </h2>
              <div>
                <h2 className="card-title ">Name : {Name}</h2>
              </div>
              <p className="md:flex items-center text-left mt-2 text-lg font-medium">
                Email : <span>{Email}</span>
              </p>
            </div>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div> */}
            <div className="border my-2"></div>
            <div>
              <div>
                <h2 className="text-left font-semibold font-Teko text-3xl underline mb-3 text-[#5bb543] ">
                  Customer
                </h2>
                <div>
                  <h2 className="card-title ">Name : {customerName}</h2>
                </div>
                <p className="flex items-center text-left mt-2 text-lg font-medium">
                  Email :{email}
                </p>
                <p className="flex items-center text-left mt-2 text-lg font-medium">
                  Address : {address}
                </p>
                <p className="flex items-center text-left mt-2 text-lg font-medium">
                  Contact :{number}
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleDeleteCart(_id)}
          className="absolute  right-4 top-4"
        >
          <RiDeleteBin5Line className="text-red-500 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
