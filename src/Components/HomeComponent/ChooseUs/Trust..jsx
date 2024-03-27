import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import TrustCard from "./TrustCard";

const Trust = () => {
  const axios = useAxios();
  const { data: choose } = useQuery({
    queryKey: ["choose"],
    queryFn: async () => {
      const res = await axios.get("/choseUs");
      return res;
    },
  });

  return (
    <div className="grid my-20 lg:grid-cols-2">
      <div>
        <img
          className="w-full lg:h-full"
          src="https://img.freepik.com/free-photo/coworkers-looking-computer-taking-about-work-conference-room-young-businessman-looking-charts_482257-30656.jpg?uid=R119918187&ga=GA1.1.1612036082.1702475109&"
          alt="meting"
        />
      </div>
      <div
        className=" px-10  py-20"
        style={{ backgroundColor: "rgba(4, 24, 39, 0.95)" }}
      >
        <div className="space-y-2 my-5 mb-8">
          <h3 className=" text-3xl md:text-5xl font-semibold font-Teko text-left text-white">
            Why Choose Us
          </h3>
          <p className="text-[#b5b5b5] text-left">
            Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum metus.
            answerala Suspendisse oi potenti. Nullam ac lorem ex. Ut feugiat
            maximus ante, vel gravida ex.
          </p>
        </div>
        <div className="grid md:grid-cols-2 justify-between gap-10">
          {choose?.data.map((item, idx) => (
            <TrustCard key={idx} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trust;
