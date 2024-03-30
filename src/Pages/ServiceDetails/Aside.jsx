import { IoCheckmarkDone } from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";

const Aside = ({ name, photo, details }) => {
  return (
    <div className="mx-10 ">
      <div className="flex justify-center">
        <img src={photo} alt="" />
      </div>
      <h3 className="text-5xl text-left font-bold font-Teko my-10">{name}</h3>
      <div className="bg-[#fff] shadow-lg ">
        <button className="badge text-xl py-5 text-white bg-[#5bb543] w-full rounded-t-xl rounded-none  hover:bg-[rgba(45,189,6,0.83)]">
          Overview
        </button>
        <div className="text-left m-7 space-y-5 pb-8">
          <div className="">
            <h3 className="text-3xl font-Teko font-semibold">Training</h3>
            <p className="text-gray-500 text-lg ">
              Obtain pain of because is pain, but because you nally
              circumstances more than some work um soluta nobis est eligendi
              optio cumque nihil impedit quo minus id quodOne advanced diverted
              domestic repeated bringing you old. Possible procured her
              trifling.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-Teko font-semibold">Our Package</h3>
            <div className="flex gap-3 items-center text-xl text-gray-500">
              <IoCheckmarkDone className="text-[#5bb543]" />
              <p>Tailored packages to suit your specific needs.</p>
            </div>
            <div className="flex gap-3 items-center text-xl text-gray-500">
              <IoCheckmarkDone className="text-[#5bb543]" />
              <p>All-inclusive packages for complete solutions.</p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-Teko font-semibold">
              What's Included
            </h3>
            <div className="flex gap-3 items-center text-xl text-gray-500">
              <TbPointFilled className="text-[#5bb543]" />
              <p>Services tailored to fit your budget.</p>
            </div>
            <div className="flex gap-3 items-center text-xl text-gray-500">
              <TbPointFilled className="text-[#5bb543]" />
              <p>Ensuring top-notch service excellence.</p>
            </div>
            <div className="flex gap-3 items-center text-xl text-gray-500">
              <TbPointFilled className="text-[#5bb543]" />
              <p>Prompt and reliable completion of tasks.</p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-Teko font-semibold">
              What's Excluded
            </h3>
            <div className="flex gap-3 items-center text-xl text-gray-500">
              <TbPointFilled className="text-[#5bb543]" />
              <p>Excluded services may accommodate unique requirements.</p>
            </div>
            <div className="flex gap-3 items-center text-xl text-gray-500">
              <TbPointFilled className="text-[#5bb543]" />
              <p>Certain services may be available at an extra cost.</p>
            </div>
            <div className="flex gap-3 items-center text-xl text-gray-500">
              <TbPointFilled className="text-[#5bb543]" />
              <p>
                {" "}
                Some offerings fall outside the scope of standard packages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
