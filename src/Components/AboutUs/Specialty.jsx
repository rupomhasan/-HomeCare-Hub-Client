import { HiCheckBadge } from "react-icons/hi2";
import playButton from "../../assets/Lottie/playButton.json";
import Lottie from "lottie-react";
import { useRef, useState } from "react";
import CommonBanner from "../common/CommonBanner";
import VideoModal from "./VideoModal";
const Specialty = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeVideo = () => {
    setIsModalOpen(false);
  };

  const routesName = "About Us";

  return (
    <div>
      <CommonBanner routesName="About Us" />
      <div className="my-20 max-w-screen-xl mx-auto">
        <div className="mx-5 flex justify-between gap-10">
          <div className="flex-1 max-w-screen-sm text-left space-y-3">
            <h3 className="text-2xl md:text-3xl font-Teko font-semibold  ">
              Lear About Our Dedication <br /> TO Serving You!
            </h3>
            <div className="space-y-5 text-[#878787]">
              <div>
                <p className="bg-[url('https://serve-nextjs.vercel.app/_next/static/media/sub-title-before.7e8a1c0a.svg')] text-[#5bb543] md:text-xl font-medium w-fit">
                  About Us
                </p>
                <p>
                  At HomeCare Hub, we understand the importance of a
                  well-maintained home, and we're dedicated to providing
                  top-notch services to meet all your needs. From tech support
                  to gardening and repair services, we've got you covered.
                </p>
              </div>
              <div>
                <p className="bg-[url('https://serve-nextjs.vercel.app/_next/static/media/sub-title-before.7e8a1c0a.svg')] text-[#5bb543] md:text-xl font-medium w-fit">
                  Our Facilities
                </p>
                <p>
                  HomeCare Hub offers comprehensive facilities including tech
                  support, gardening services, and repair workshops. Our
                  consultation rooms and training area provide expert guidance,
                  while our customer service desk ensures seamless assistance.
                </p>
              </div>
              <div className="space-y-2">
                <p className="bg-[url('https://serve-nextjs.vercel.app/_next/static/media/sub-title-before.7e8a1c0a.svg')] text-[#5bb543] md:text-xl font-medium w-fit">
                  Our Facilities
                </p>
                <p className="flex items-center gap-1">
                  <HiCheckBadge className="text-[#5bb543]" />
                  <span>Expert and dedicated medical professionals. </span>
                </p>
                <p className="flex items-center gap-1">
                  <HiCheckBadge className="text-[#5bb543]" />
                  <span>Cutting-edge technology for superior care . </span>
                </p>
                <p className="flex items-center gap-1">
                  <HiCheckBadge className="text-[#5bb543]" />
                  <span>24/7 emergency service. </span>
                </p>
                <p className="flex items-center gap-1">
                  <HiCheckBadge className="text-[#5bb543]" />
                  <span>Expert and dedicated medical professionals. </span>
                </p>
                <p className="flex items-center gap-1">
                  <HiCheckBadge className="text-[#5bb543]" />
                  <span>Round-the-clock emergency services. </span>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative ">
            {/* <video ref={videoRef} width="640" height="360">
          <source src="" type="video" />
        </video> */}
            <img
              className="rounded-xl z-10"
              src="https://img.freepik.com/free-photo/back-view-man-crouching-near-kitchen-sink_259150-58255.jpg?ga=GA1.1.892617110.1711971863&"
            />
            <div className="absolute w-32 transform -translate-x-1/2 top-1/2 ">
              <Lottie
                onClick={() => setIsModalOpen(true)}
                animationData={playButton}
              />
            </div>
            <div className="">
              <VideoModal
                videoId="HomeCare_Hub"
                onClose={closeVideo}
                isOpen={isModalOpen}
              />
            </div>
            <img
              className="absolute   h-full top-0 right-40 -z-10"
              src="https://demo.voidcoders.com/htmldemo/medhelpV2/medhelp-center/assets/images/icon/vector-shape1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialty;
