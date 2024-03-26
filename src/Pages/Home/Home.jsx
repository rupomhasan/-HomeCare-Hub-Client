import Banner from "../../Components/HomeComponent/Banner/Banner";
import AllCategories from "../../Components/HomeComponent/AllCategory/AllCategories";
import { Suspense, lazy } from "react";
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
      </Suspense>
    </div>
  );
};

export default Home;
