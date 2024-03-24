import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Navbar } from "flowbite-react";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import AboutUs from "../Pages/AboutUs/AboutUs";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "myBookings",
        element: <MyBookings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
