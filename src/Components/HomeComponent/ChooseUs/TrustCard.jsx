const TrustCard = ({ data }) => {
  const { description, title, url } = data;
  return (
    <div className="flex items-center gap-5 ">
      <div>
        <img
          className="border p-2 rounded-full border-[#ff6635]"
          src={url}
          alt=""
        />
      </div>
      <div className="text-left space-y-2 text-white">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-[#b5b5b5]">{description}</p>
      </div>
    </div>
  );
};

export default TrustCard;
