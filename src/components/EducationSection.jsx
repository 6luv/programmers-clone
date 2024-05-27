import EducationCard from "./ElementCard";
import TitleBar from "./TitleBar";
import EducationData from "../data/educationData.json";

const EducationSection = () => {
  return (
    <section>
      <TitleBar title="국비지원으로 개발자 커리어 시작!" />
      <div className="container-style grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {EducationData.map((v) => (
          <EducationCard
            key={v.id}
            image={v.image}
            title={v.title}
            isInProgress={v.isInProgress}
            alarm={v.alarm}
            hasRating={v.hasRating}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
