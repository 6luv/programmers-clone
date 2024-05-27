const ProgramCard = ({ image, title, dateOfReceipt, examDate }) => {
  return (
    <div className="mt-10">
      <img
        className="w-[564px] h-[250px] object-cover rounded-xl"
        src={`/images/programs/${image}.jpeg`}
      />
      <div className="mt-5">
        <div className="flex justify-start items-center">
          <div className="text-sm bg-[#dce1e5] text-main-content-gray py-1 px-[6px] mr-2 rounded-md">
            종료
          </div>
          <h1 className="text-lg font-bold">{title}</h1>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex">
            <div className="font-bold text-main-content-gray mr-4 mb-2">
              접수일
            </div>
            <div className="text-main-content-gray">{dateOfReceipt}</div>
          </div>
          <div className="flex">
            <div className="font-bold text-main-content-gray mr-4">시험일</div>
            <div className="text-main-content-gray">{examDate}</div>
          </div>
        </div>
        <button className="font-medium py-4 px-[19px] text-programmers-main bg-[#f5f6f7] rounded-md mt-6">
          자세히 보기
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
