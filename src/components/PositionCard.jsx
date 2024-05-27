const PositionCard = ({ image, position, company }) => {
  return (
    <div className="flex items-center justify-start border-2 p-6 rounded-2xl max-w-[365px] w-full mt-10">
      <img
        src={`/images/positions/${image}.png`}
        alt={position}
        className="w-20 h-20 rounded-lg object-contain"
      />
      <div className="flex flex-col ml-4">
        <div className="mb-2 flex flex-col">
          <div className="font-bold mb-1">{position}</div>
          <div className="text-[#2c323b] text-sm">{company}</div>
        </div>
        <div className="flex items-center text-sm text-main-content-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="h-4 w-4 text-main-content-gray mr-2"
          >
            <path
              fill="currentColor"
              d="M22 18V3H2v15H0v2h24v-2zm-8 0h-4v-1h4zm6-3H4V5h16z"
            ></path>
          </svg>
          신입
        </div>
      </div>
    </div>
  );
};

export default PositionCard;
