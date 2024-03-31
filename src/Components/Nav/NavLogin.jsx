import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const NavLogin = () => {
  const axios = useAxios();
  const { user, userLogOut } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    userLogOut().then(axios.delete("/auth/clear-cookie"));
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <div>
        {!user ? (
          <Link
            to="/login"
            className="btn px-8 bg-[#5bb543]
      hover:bg-[#3fe012] text-white text-lg btn-sm w-full"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="btn px-8 bg-[#5bb543]
        hover:bg-[#3fe012] text-white text-lg btn-sm w-full"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default NavLogin;
