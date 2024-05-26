const SlideBannerCard = ({
  id,
  label,
  title1,
  title2,
  description,
  isBlack,
}) => {
  return (
    <div
      className={`h-[400px] w-full ${isBlack ? "bg-black" : "bg-[#D5C6FF]"} `}
    >
      <div className="flex px-5 justify-center">
        <div
          className={`flex flex-col justify-center ${
            isBlack ? "text-white" : "text-black"
          }`}
        >
          <h5 className="mb-2">{label}</h5>
          <h3 className="font-semibold text-[26px]">{title1}</h3>
          <h3 className="font-semibold text-[26px]">{title2}</h3>
          <h5 className="mt-4">{description}</h5>
        </div>
        <div>
          <img
            className="h-[400px] object-cover w-full"
            src={`/images/banners/${id}.png`}
            alt={label}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideBannerCard;
