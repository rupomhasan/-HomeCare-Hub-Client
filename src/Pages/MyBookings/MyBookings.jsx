import CommonBanner from "../../Components/common/CommonBanner";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";

const MyBookings = () => {
  const { user } = useAuth();
  const email = user?.email;
  const axios = useAxios();
  const { data: bookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axios.get(`/user/bookings?email=${email}`);
      return res;
    },
  });
  console.log(bookings?.data);
  const routesName = "My Bookings";
  return (
    <div>
      <CommonBanner routesName={routesName} />
      <div>
        {bookings?.data?.map((item, idx) => {
          console.log(idx, item);
        })}
      </div>
    </div>
  );
};

export default MyBookings;
