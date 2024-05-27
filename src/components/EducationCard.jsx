const EducationCard = ({ image, title }) => {
  return (
    <div className="h-auto max-w-[370px] mt-10 flex flex-col">
      <img src={`images/educations/${image}.png`} className="rounded-t-xl" />
      <div className="p-6 border-[1px] border-[#dce1e5] rounded-b-xl flex flex-col justify-between flex-grow">
        <div className="mb-6">
          <h3 className="mb-4 text-programmers-main font-bold text-[18px]">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            <div className="py-1 px-[6px] rounded-[4px] font-medium text-xs text-[#0078ff] bg-[#ebf5ff]">
              모집 중 | D-25
            </div>
            <div className="py-1 px-[6px] rounded-[4px] font-medium text-xs text-[#ff850a] bg-[#fff7de]">
              오픈 알림 신청
            </div>
            <div className="py-1 px-[6px] rounded-[4px] font-medium text-xs text-[#3ab03f] bg-[#ebfae8]">
              국비지원
            </div>
          </div>
        </div>
        <div className="pt-4 mt-auto text-programmers-main font-bold border-t border-[#dce1e5]">
          무료
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
