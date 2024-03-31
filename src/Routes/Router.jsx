import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import AboutUs from "../Pages/AboutUs/AboutUs";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Signup from "../Pages/Signup/Signup";
import Details from "../Pages/ServiceDetails/Details";
import SignIn from "../Pages/Login/SignIn";
import ErrorPage from "../Pages/Error/ErrorPage";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "services",
        element: (
          <PrivetRoutes>
            <Services />
          </PrivetRoutes>
        ),
        loader: () => fetch("http://localhost:2000/api/v1/service/count"),
      },
      {
        path: "service/:id",
        element: (
          <PrivetRoutes>
            <Details />,
          </PrivetRoutes>
        ),
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "myBookings",
        element: (
          <PrivetRoutes>
            <MyBookings />
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
