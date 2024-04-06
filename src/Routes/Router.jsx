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
import MyServices from "../Pages/DashBoard/MyServices";
import MyBookedServices from "../Pages/DashBoard/MyBookedServices";
import Setting from "../Pages/DashBoard/Setting";
import DashBoard from "../Pages/DashBoard/DashBoard";
import UpdateServices from "../Pages/DashBoard/UpdateServices";
import AddService from "../Pages/DashBoard/AddService";

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
        loader: () =>
          fetch("https://home-care-hub-server.vercel.app/api/v1/service/count"),
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
        element: (
          <PrivetRoutes>
            <AboutUs />
          </PrivetRoutes>
        ),
      },
      {
        path: "myBookings",
        element: (
          <PrivetRoutes>
            <MyBookings />
          </PrivetRoutes>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRoutes>
            <DashBoard />
          </PrivetRoutes>
        ),
        children: [
          {
            path: "myServices",
            element: <MyServices />,
          },
          {
            path: "addService",
            element: <AddService />,
          },
          {
            path: "myBookedServices",
            element: <MyBookedServices />,
          },
          {
            path: "setting",
            element: <Setting />,
          },
          {
            path: "updateService/:id",
            element: <UpdateServices />,
          },
        ],
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
