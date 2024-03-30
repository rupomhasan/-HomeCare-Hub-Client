import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Children } from "react";

const PrivetRoutes = () => {
  const { isLoading, user } = useAuth();
  const location = useLocation();
  console.log(location);
  if (isLoading) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login" replace />;
  }

  return Children;
};

export default PrivetRoutes;
