import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/FirebaseConfig";
import useAxios from "../Hooks/useAxios";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();
  const axios = useAxios();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const newUserSignUp = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userLogOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      if (user) {
        setUser(user);
        // setIsLoading(true);
        const email = user.email;
        try {
          const res = await axios.post("/auth/access-token", { email });
          console.log(email, res);
        } catch (error) {
          console.log("Error retrieving access token");
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        setUser(null);
      }
    });

    return () => unSubscribe();
  }, [axios]);

  // const { data: bookingCount, refetch } = useQuery({
  //   queryKey: ["BookingCount"],
  //   queryFn: async () => {
  //     return await axios.get(`/booking/count?email=${user.email}`);
  //   },
  // });

  const values = {
    // totalBooking,
    // recount,
    newUserSignUp,
    userLogin,
    userLogOut,
    user,
    isLoading,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
