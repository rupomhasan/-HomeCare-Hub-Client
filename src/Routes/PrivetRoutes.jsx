import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import {  HashLoader } from "react-spinners";

const PrivetRoutes = ({ children }) => {
  const { isLoading, user } = useAuth();
  const location = useLocation();
  console.log(location);
  if (isLoading) {
    return (
      <div className="flex justify-center my-10">
        <HashLoader color="#5bb543" />
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login" replace />;
  }

  return children;
};

export default PrivetRoutes;
