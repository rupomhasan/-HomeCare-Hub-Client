import { IoCheckmarkDone } from "react-icons/io5";

const ServicePrice = ({ price }) => {
  console.log(price);
  return (
    <div className="ml-10 card  shadow-xl bg-[#fff] ">
      <div className="flex text-white justify-between px-10 py-2 rounded-t-lg text-xl font-bold  bg-[#142935]">
        <h3>Service Price</h3>
        <p>{price}</p>
      </div>
      <div className="px-10 py-5 text-left space-y-3">
        <h3 className="text-3xl pb-2 text-left font-Teko font-semibold">
          Our Package
        </h3>
        <div className="flex gap-3 items-center text-xl text-gray-500">
          <IoCheckmarkDone className="text-[#5bb543]" />
          <p>Choose from various payment methods for convenience.</p>
        </div>{" "}
        <div className="flex gap-3 items-center text-xl text-gray-500">
          <IoCheckmarkDone className="text-[#5bb543]" />
          <p>Clear breakdown of costs ensures no hidden fees.</p>
        </div>{" "}
        <div className="flex gap-3 items-center text-xl text-gray-500">
          <IoCheckmarkDone className="text-[#5bb543]" />
          <p>Immediate access to services upon purchase confirmation.</p>
        </div>
      </div>
      <button className="btn w-full bg-[#5bb543] rounded text-white  text-xl hover:bg-[#2fc006]">
        Order Now
      </button>
    </div>
  );
};

export default ServicePrice;
