import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const OutComes = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-[url('https://img.freepik.com/premium-photo/woman-pray-god-blessing-wishing-have-better-life_2379-2507.jpg?size=626&ext=jpg&uid=R119918187&ga=GA1.1.892617110.1711971863&semt=ais')] bg-cover bg-sky-600 bg-blend-multiply">
      <div
        ref={ref}
        className="max-w-screen-xl grid grid-cols-2 gap-10 md:grid-cols-4 justify-evenly mx-auto text-white py-10"
      >
        <div>
          <div className="text-4xl font-Teko font-semibold">
            <CountUp end={inView ? 10 : 0} duration={5} />
          </div>
          <p className="text-lg font-medium">Years of Experience</p>
        </div>{" "}
        <div>
          <div className="text-4xl font-Teko font-semibold">
            <CountUp end={inView ? 150 : 0} duration={5} />
          </div>
          <p className="text-lg font-medium">Service Specialties</p>
        </div>{" "}
        <div>
          <div className="text-4xl font-Teko font-semibold">
            <CountUp end={inView ? 100000 : 0} duration={5} />
            <span>+</span>
          </div>
          <p className="text-lg font-medium">Successful Services</p>
        </div>{" "}
        <div>
          <div className="text-4xl font-Teko font-semibold">
            <CountUp end={inView ? 13 : 0} duration={5} />
          </div>
          <p className="text-lg font-medium">National Awards</p>
        </div>
      </div>
    </div>
  );
};

export default OutComes;
