import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
// import { Children } from "react";
import Skeleton from "react-loading-skeleton";

const PrivetRoutes = ({ children }) => {
  const { isLoading, user } = useAuth();
  const location = useLocation();
  console.log(location);
  if (isLoading) {
    return (
      <div>
        <h1 className="title">
          <Skeleton className="w-full h-[50vh]" />
        </h1>
        <div className="max-w-screen-xl mx-auto my-20">
          <p className="grid md:grid-cols-3 lg:grid-cols-4  mx-10 gap-5">
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login" replace />;
  }

  return children;
};

export default PrivetRoutes;
