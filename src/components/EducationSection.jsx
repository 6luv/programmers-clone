import EducationCard from "./EducationCard";
import TitleBar from "./TitleBar";

const EducationSection = () => {
  return (
    <main>
      <TitleBar title="국비지원으로 개발자 커리어 시작!" />
      <div className="w-[1160px] mt-14 flex justify-between mx-auto">
        <EducationCard />
      </div>
    </main>
  );
};

export default EducationSection;
