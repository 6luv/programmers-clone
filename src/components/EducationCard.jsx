const EducationCard = () => {
  return (
    <div className="h-[447px] w-[326px]">
      <img src="images/educations/1.png" className="rounded-t-xl" />
      <div className="p-6 border-[1px] border-[#dce1e5] rounded-b-xl">
        <div className="mb-6">
          <h3 className="mb-4 text-programmers-main font-bold text-[18px] rounded-b-xl">
            [1기] K-Digital Training: 클라우드 기반 백엔드 엔지니어링
          </h3>
          <div className="flex">
            <div className="py-1 px-[6px] rounded-[4px] font-medium text-xs text-[#0078ff] bg-[#ebf5ff] mr-2">
              모집 중 | D-25
            </div>
            <div className="py-1 px-[6px] rounded-[4px] font-medium text-xs text-[#ff850a] bg-[#fff7de] mr-2">
              오픈 알림 신청
            </div>
            <div className="py-1 px-[6px] rounded-[4px] font-medium text-xs text-[#3ab03f] bg-[#ebfae8]">
              국비지원
            </div>
          </div>
        </div>
        <div className="pt-4 mt-[27px] text-programmers-main font-bold border-t border-[#dce1e5]">
          무료
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
