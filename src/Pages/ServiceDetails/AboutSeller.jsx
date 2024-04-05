import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const AboutSeller = ({ seller, order, rating }) => {
  const { Name, Email, Logo, Image } = seller;
  return (
    <div className="md:ml-10 bg-[#fff]">
      <div className="card bg-[#fff] shadow-xl">
        <div className="mb-10">
          <div className="flex justify-center my-10">
            <img
              className="p-4 "
              src="https://serve-nextjs.vercel.app/assets/images/seller.png"
              alt=""
            />
          </div>
          <h3 className="font-bold font-Teko  text-3xl">About Seller</h3>
          <p className="px-10">
            Trusted provider delivering excellence in every service offered.
          </p>
        </div>
        <div>
          {" "}
          <div className="flex px-7 py-2 justify-between border-t">
            <p>Order Complete</p>
            <p>{order}</p>
          </div>
          <div className="flex px-7 py-2 justify-between border-t">
            <p>Seller Rating </p>
            <div>
              <Rating
                initialRating={rating}
                emptySymbol={<FaRegStar className="text-lg text-[#FFDF00]" />}
                fullSymbol={<FaStar className="text-lg text-[#FFDF00]" />}
              />
              <span>({rating}/5)</span>
            </div>
          </div>
          <div className="md:flex px-7 py-2 justify-between border-t">
            <p>Email : </p>
            <p>{Email}</p>
          </div>
          <div className="flex px-7 py-2 justify-between border-t">
            <p>Seller Name</p>
            <p>{Name}</p>
          </div>
          <div className=" flex  gap-2 justify-center my-5">
            <FaFacebookF className=" text-4xl bg-[#5bb543] text-white rounded-full p-2 " />
            <FaTwitter className="text-4xl bg-[#5bb543] text-white rounded-full p-2  " />
            <FaInstagram className="text-4xl bg-[#5bb543] text-white rounded-full p-2  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSeller;
