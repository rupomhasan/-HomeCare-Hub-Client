import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";

const Footer = () => {
  return (
    <div
      className="bg-[#142935] py-10 px-2"
      style={{
        backgroundImage:
          "url('https://serve-nextjs.vercel.app/assets/images/footer-left-shape.png')",
      }}
    >
      <footer className="max-w-screen-xl mx-auto footer p-10  text-white">
        <aside>
          <Logo />
          <p className="text-left w-40  hover:text-[#5bb543] mb-2">
            Bringing Comfort and Care to Your Doorstep, Making Lives Better
          </p>
          <button className="btn text-white btn-outline border-2 hover:bg-[#5bb543] hover:border-none rounded-lg border-[#5bb543]">
            All Services
          </button>
        </aside>
        <nav className=" ">
          <h6 className="footer-title font-Teko text-2xl">Categories</h6>
          <div className="flex gap-1">
            <div className=" h-1 bg-[#5bb543] rounded w-14"></div>
            <div className=" h-1 bg-[#5bb543] rounded w-5"></div>
          </div>
          <Link className="link link-hover hover:text-[#5bb543]">Cleaning</Link>
          <Link className="link link-hover hover:text-[#5bb543]">
            Gardening
          </Link>
          <Link className="link link-hover hover:text-[#5bb543]">
            Maintenance
          </Link>
          <Link className="link link-hover hover:text-[#5bb543]">Pet Care</Link>
          <Link className="link link-hover hover:text-[#5bb543]">
            Tech Support
          </Link>

          <Link className="link link-hover hover:text-[#5bb543]">
            Transporting
          </Link>
        </nav>
        <nav className=" ">
          <h6 className="footer-title font-Teko text-2xl">Explore On</h6>
          <div className="flex gap-1">
            <div className=" h-1 bg-[#5bb543] rounded w-14"></div>
            <div className=" h-1 bg-[#5bb543] rounded w-5"></div>
          </div>
          <Link className="link link-hover hover:text-[#5bb543]">Home</Link>
          <Link className="link link-hover hover:text-[#5bb543]">
            Service Details
          </Link>
          <Link className="link link-hover hover:text-[#5bb543]">About us</Link>
          <Link className="link link-hover hover:text-[#5bb543]">
            Privacy Policy
          </Link>
          <Link className="link link-hover hover:text-[#5bb543]">
            Terms of Use
          </Link>
          <Link className="link link-hover hover:text-[#5bb543]">
            Press kit
          </Link>
        </nav>
        <nav className="text-lg ">
          <h6 className="footer-title font-Teko text-2xl">Contact</h6>
          <div className="flex gap-1">
            <div className=" h-1 bg-[#5bb543] rounded w-14"></div>
            <div className=" h-1 bg-[#5bb543] rounded w-5"></div>
          </div>
          <div className="flex items-center gap-2">
            <MdAddIcCall className="text-3xl text-[#5bb543]" />
            <div>
              <p className="link link-hover hover:text-[#5bb543]">
                01828800892
              </p>
              <p className="link link-hover hover:text-[#5bb543]">
                01828800869
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IoMdMail className="text-[25px] text-[#5bb543]" />
            <div>
              <p className="link link-hover hover:text-[#5bb543]">
                homecare@gmail.com
              </p>
              <p className="link link-hover hover:text-[#5bb543]">
                servicehub@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ImLocation2 className="text-[25px] text-[#5bb543]" />
            <div>
              <p className="link link-hover hover:text-[#5bb543]">
                123/32,Saver MOMS.SE
              </p>
              <p className="link link-hover hover:text-[#5bb543] text-left">
                Bangladesh
              </p>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
