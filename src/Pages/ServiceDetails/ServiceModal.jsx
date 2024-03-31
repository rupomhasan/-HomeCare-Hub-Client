import { TbCurrencyTaka } from "react-icons/tb";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const ServiceModal = ({ openModal, name, provider, img, price }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const axios = useAxios();
  const { Name, Email } = provider;
  const [customerName, setCustomerName] = useState("");
  const [number, setNumber] = useState(null);
  const [address, setAddress] = useState("");
  const [date, setDate] = useState();
  console.log(user);

  const handleBookings = () => {
    console.log({ customerName, email: user.email, number, address, date });

    const data = {
      name,
      price,
      img,
      provider,
      customer: {
        customerName,
        email: user?.email,
        number,
        address,
        date,
        status: "pending",
      },
    };
    axios
      .post("http://localhost:2000/api/v1/user/create-booking", data)
      .then((res) => {
        console.log(res.data);
        if (res ? data?.inserted : true) {
          navigate("/services");
        }
      });
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-3xl text-[#2b960e] font-Teko">
          Book Service
        </h3>
        <div>
          <div>
            <div className="flex justify-center my-2">
              <img className="w-60" src={img} alt="modal" />
            </div>
            <div className="mx-5 mt-10 text-left space-y-2">
              <div>
                <h2 className="title">{name}</h2>
                <p className="flex items-center">
                  Price : <TbCurrencyTaka />
                  <span className="font-medium  text-[#5bb543] font-Teko text-2xl">
                    {price}
                  </span>
                </p>
              </div>
              <div className="border"></div>
              <div className="pb-2">
                <h3 className="text-xl font-bold mb-2">Provider Info</h3>
                <p> Name : {Name}</p>
                <p>Email : {Email}</p>
              </div>
              <div className="border"></div>
              <div>
                <h2 className="text-xl font-bold ">Customer Info</h2>
                <form className="my-2 space-y-3">
                  <input
                    onBlur={(e) => setCustomerName(e.target.value)}
                    required
                    type="text"
                    className="block border mt-1 px-3 py-1 w-full rounded-lg"
                    placeholder="Customer Name"
                  />{" "}
                  <input
                    onBlur={(e) => setAddress(e.target.value)}
                    type="text"
                    required
                    placeholder="Customer Address"
                    className="border rounded-lg w-full px-3 py-1 "
                  />
                  <input
                    onBlur={(e) => setNumber(e.target.value)}
                    type="tel"
                    required
                    // name="tel"
                    placeholder="Customer Number"
                    className="px-3 py-1 border rounded-lg w-full"
                  />
                  <input
                    type="date"
                    onBlur={(e) => setDate(e.target.value)}
                    required
                    className=" px-3 py-1"
                  />
                  <button
                    onClick={handleBookings}
                    type="button"
                    className="btn w-full bg-[#5bb543] hover:bg-[#269e05] text-xl text-white btn-sm"
                  >
                    Confirm Service
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="m-5  ">
          <form method=" ">
            <div className="md:flex justify-between">
              <Link
                to="/"
                className="btn btn-sm btn-ghost text-lg hover:bg-[#5bb543] hover:text-white rounded-lg"
              >
                Back To Home
              </Link>
              {/* if there is a button in form, it will close the modal */}
              <button className=" btn btn-sm text-lg hover:bg-[#5bb543]">
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ServiceModal;
