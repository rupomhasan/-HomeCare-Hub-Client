import React from "react";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useBooking = () => {
  const axios = useAxios();
  const { user } = useAuth();

  const { data: bookingCount, refetch } = useQuery({
    queryKey: ["BookingCount"],
    queryFn: async () => {
      return await axios.get(`/booking/count?email=${user.email}`);
    },
  });

  const totalBooking = bookingCount?.data?.booking;
  return { totalBooking, refetch };
};

export default useBooking;
