import { GoogleAuthProvider } from "firebase/auth";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Social = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { socialUser } = useAuth();
  const googleProvider = new GoogleAuthProvider();
  const createSocialUser = (provider) => {
    socialUser(provider)
      .then((res) => {
        if (res?.user) {
          navigate(location?.state ? location?.state : "/");
        }
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div className="flex gap-2">
      <FaFacebookF className="hover:link text-4xl p-2 bg-blue-600 rounded-full text-white" />
      <FaTwitter className="hover:link text-4xl p-2 bg-sky-500 rounded-full text-white" />
      <FcGoogle
        onClick={() => createSocialUser(googleProvider)}
        className="hover:link text-4xl "
      />
    </div>
  );
};

export default Social;
