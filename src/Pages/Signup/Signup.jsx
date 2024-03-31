import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Social from "../../Components/Shared/Social";
import { useState } from "react";
import { motion } from "framer-motion";
import { TiArrowBack } from "react-icons/ti";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/Lottie/Login.json";
import useAuth from "../../Hooks/useAuth";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { newUserSignUp } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleNewUser = (e) => {
    e.preventDefault();
    newUserSignUp(email, password).then((userCredential) => {
      console.log(userCredential.user);

      navigate(location?.state ? location?.state : "/");
    });
    console.log({ name, email, password });
  };

  return (
    <div>
      <div className=" min-h-screen max-w-screen-xl mx-auto">
        <motion.button
          initial={{ color: "#fff", backgroundColor: "#5bb543" }}
          whileHover={{ color: "#5bb543", backgroundColor: "#fff" }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="absolute btn z-10 hover:border-[#5bb543] hover:border-2 hover:bg-white hover:text-[#5bb543] btn-sm rounded left-3 top-3 "
        >
          <TiArrowBack className="text-2xl " />
          <Link className="text-2xl font-Teko font-medium " to="/">
            {" "}
            Back To Home
          </Link>
        </motion.button>
        <div className="text-center pt-20">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <div className=" flex justify-center text-xl font-bold text-gray-500">
            <p className="py-6">
              Discover the simplicity of registration <br /> Join us today!
            </p>
          </div>
        </div>
        <div className=" md:flex max-w-screen-lg mx-auto justify-evenly my-10">
          <div className="w-fit">
            <Lottie animationData={loginAnimation} />
          </div>
          <div className="card w-fit p-10  shadow-2xl bg-base-100">
            <form onSubmit={handleNewUser} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-5 py-1 rounded border"
                  required
                  onBlur={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="px-5 py-1 rounded border"
                  required
                  onBlur={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="px-5 py-1 rounded border"
                  required
                  onBlur={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn rounded bg-[#5bb543] btn-sm mt-3 text-white text-xl font-Teko hover:bg-[#29a806] w-full"
              >
                Register Now
              </button>
            </form>
            <div className="mt-4">
              <p>
                Already have an account ?{" "}
                <Link to="/login" className="hover:link font-bold ">
                  Please Login
                </Link>
              </p>
              <div className="flex items-center gap-3 my-4">
                <div className="w-full bg-gray-400 h-[2px]"></div>
                <div> Or</div>
                <div className="w-full h-[2px] bg-gray-400"></div>
              </div>
              <div className="flex justify-center">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
