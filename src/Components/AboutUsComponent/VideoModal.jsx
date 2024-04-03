import { RxCross2 } from "react-icons/rx";

const VideoModal = ({ onClose, videoId, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="">
      <div
        className={`fixed inset-0 z-50 flex justify-center items-center overflow-hidden bg-black bg-opacity-50`}
      >
        <div className=" relative bg-white rounded-lg w-fit p-1  mx-auto ">
          <button
            className="absolute -top-5 -right-5 text-white hover:text-gray-600"
            onClick={onClose}
          >
            <RxCross2 className="text-2xl" />
          </button>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="YouTube Video "
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DU2q52AVRI0?autoplay=1&rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              style={{ margin: "auto", display: "block" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
