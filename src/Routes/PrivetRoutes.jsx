import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Children } from "react";

const PrivetRoutes = ({ children }) => {
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

  return children;
};

export default PrivetRoutes;
