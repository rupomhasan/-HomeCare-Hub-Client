import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../../Components/Shared/Social";
import { TiArrowBack } from "react-icons/ti";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/Lottie/Login.json";
import useAuth from "../../Hooks/useAuth";
const SignIn = () => {
  const { userLogin } = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    userLogin(email, password)
      .then((res) => {
        console.log(res);

        if (res) {
          navigate(location?.state ? location?.state : "/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
        <div className="text-center mt-10">
          <h1 className="text-5xl font-Teko  font-semibold">Login now!</h1>
          <div className="text-xl text-gray-500 font-semibold flex justify-center">
            <p className="py-6">
              Experience the ease of seamless login <br /> Join us now!
            </p>
          </div>
        </div>
        <div className=" md:flex max-w-screen-lg mx-auto justify-evenly my-10">
          <div className="w-fit">
            <Lottie animationData={loginAnimation} />
          </div>
          <div className="card w-fit p-10  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className=" rounded border px-5 py-1"
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
                  className=" rounded border px-5 py-1"
                  required
                  onBlur={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <input
                type="submit"
                className="btn rounded bg-[#5bb543] btn-sm mt-3 text-white text-xl font-Teko hover:bg-[#29a806] w-full"
                value="Login Here "
              />
            </form>
            <div className="mt-4">
              <p>
                New to this site ?{" "}
                <Link to="/signup" className="hover:link font-bold">
                  Please Register
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

export default SignIn;
