import Banner from "../../Components/HomeComponent/Banner/Banner";
import AllCategories from "../../Components/HomeComponent/AllCategory/AllCategories";
import Trust from "../../Components/HomeComponent/ChooseUs/Trust.";
import Testimonial from "../../Components/HomeComponent/ClientReview/Testimonial";
import Blogs from "../../Components/HomeComponent/Blogs/Blogs";
import PopularServices from "../../Components/HomeComponent/PopularServices/PopularServices";
import Sponsor from "../../Components/HomeComponent/Sponsor/Sponsor";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllCategories />
      <PopularServices />
      <Trust />
      <Blogs />
      <Testimonial />
      <Sponsor />
    </div>
  );
};

export default Home;
