import axios from "axios";

const instance = axios.create({
  baseURL: "https://home-care-hub-server.vercel.app/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
