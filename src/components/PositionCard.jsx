const PositionCard = () => {
  return (
    <div className="w-[365px] h-[151px]">
      <button className="flex border-2 p-6 rounded-2xl">
        <img
          src="/images/positions/Artboard-squre.png"
          className="w-20 h-20 rounded-lg"
        />
        <div className="flex flex-col items-start ml-4">
          <div className="mb-2 flex flex-col items-start">
            <div className="font-bold mb-1">플랫폼 서비스 개발 팀원</div>
            <div className="text-[#2c323b] text-sm">히비스</div>
          </div>
          <div className="flex text-sm text-[#667380] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-[#667380] mr-2"
            >
              <path
                fill="currentColor"
                d="M22 18V3H2v15H0v2h24v-2zm-8 0h-4v-1h4zm6-3H4V5h16z"
              ></path>
            </svg>
            신입
          </div>
        </div>
      </button>
    </div>
  );
};

export default PositionCard;
