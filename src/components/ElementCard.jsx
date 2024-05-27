const EducationCard = ({
  image,
  title,
  isInProgress,
  alarm,
  hasRating,
  none,
}) => {
  return (
    <div className="h-auto max-w-[370px] mt-10 flex flex-col">
      <img src={`${image}.png`} className="rounded-t-xl" />
      <div className="p-6 border-[1px] border-[#dce1e5] rounded-b-xl flex flex-col justify-between flex-grow">
        <div className="mb-6">
          <h3 className="mb-4 text-programmers-main font-bold text-[18px]">
            {title}
          </h3>
          {none || (
            <div className="flex flex-wrap gap-2">
              {isInProgress ? (
                <div className="flex py-1 px-[6px] rounded-[4px] text-xs text-[#0078ff] bg-[#ebf5ff]">
                  <div className="font-medium ">모집 중</div>
                  <div className="px-1 text-gray-300">|</div>
                  <div className="font-medium ">D-25</div>
                </div>
              ) : (
                <div className="flex py-1 px-[6px] rounded-[4px] text-xs text-main-content-gray bg-[#dce1e5]">
                  <div className="font-medium ">모집 마감</div>
                </div>
              )}
              {alarm && (
                <div className="py-1 px-[6px] rounded-[4px] font-medium text-xs text-[#ff850a] bg-[#fff7de]">
                  오픈 알림 신청
                </div>
              )}
              <div className="py-1 px-[6px] rounded-[4px] font-medium text-xs text-[#3ab03f] bg-[#ebfae8]">
                국비지원
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center pt-4 mt-auto border-t border-[#dce1e5]">
          <div className="text-programmers-main font-bold">무료</div>
          {hasRating && (
            <div className="flex items-center px-[6px] py-1 text-main-content-gray bg-[#edeff2] rounded-[4px] font-normal">
              <div className="text-[11px] mr-1">★</div>
              <div className="text-sm">5</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
