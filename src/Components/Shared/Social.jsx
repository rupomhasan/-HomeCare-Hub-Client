import { FaFacebookF,FaTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Social = () => {
  return (
    <div className="flex gap-2">
      <FaFacebookF className="hover:link text-4xl p-2 bg-blue-600 rounded-full text-white" />
      <FaTwitter className="hover:link text-4xl p-2 bg-sky-500 rounded-full text-white" />
      <FcGoogle className="hover:link text-4xl " />
    </div>
  );
};

export default Social;
