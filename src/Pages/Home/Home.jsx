import Banner from "../../Components/HomeComponent/Banner/Banner";
import AllCategories from "../../Components/HomeComponent/AllCategory/AllCategories";
import { Suspense, lazy } from "react";
import Trust from "../../Components/HomeComponent/ChooseUs/Trust.";
import Testimonial from "../../Components/HomeComponent/ClientReview/Testimonial";
const PopularServices = lazy(() =>
  import("../../Components/HomeComponent/PopularServices/PopularServices")
);
const Home = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<div>Loading</div>}>
        <AllCategories />
        <PopularServices />
        <Trust />
      </Suspense>
      <Testimonial />
    </div>
  );
};

export default Home;
