import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const MyServices = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const { data } = useQuery({
    queryKey: ["myServices"],
    queryFn: async () => {
      return await axios.get(`/services?email=${user.email}`);
    },
  });
  console.log(data);
  return <div>myServices</div>;
};

export default MyServices;
