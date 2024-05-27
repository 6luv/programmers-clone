import EducationCard from "./ElementCard";
import TitleBar from "./TitleBar";
import LectureData from "../data/lectureData.json";

const LectureSection = () => {
  return (
    <section>
      <TitleBar title="추천 강의" />
      <div className="container-style grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {LectureData.map((v) => (
          <EducationCard
            key={v.id}
            image={v.image}
            title={v.title}
            isInProgress={v.isInProgress}
            none={v.none}
            hasRating={v.hasRating}
          />
        ))}
      </div>
    </section>
  );
};

export default LectureSection;
