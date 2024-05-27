import EducationCard from "./EducationCard";
import TitleBar from "./TitleBar";

const EducationData = [
  {
    id: 1,
    image: "images/educations/back-end",
    title: "[1기] K-Digital Training: 클라우드 기반 백엔드 엔지니어링",
    isInProgress: true,
  },
  {
    id: 2,
    image: "images/educations/front-end",
    title: "[1기] K-Digital Training: 클라우드 기반 프론트엔드 엔지니어링",
    isInProgress: true,
    hasRating: true,
  },
  {
    id: 3,
    image: "images/educations/web-full-stack",
    title:
      "[3기] K-Digital Training: 타입스크립트로 함께하는 웹 풀 사이클 개발(React, Node.js)",
  },
  {
    id: 4,
    image: "images/educations/data-analysis",
    title: "[3기] K-Digital Training: 데이터 분석 데브코스",
  },
  {
    id: 5,
    image: "images/educations/data-engineering",
    title: "[3기] K-Digital Training: 데이터 분석 데브코스",
  },
];

const EducationSection = () => {
  return (
    <section>
      <TitleBar title="국비지원으로 개발자 커리어 시작!" />
      <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {EducationData.map((v) => (
          <EducationCard
            key={v.id}
            image={v.image}
            title={v.title}
            isInProgress={v.isInProgress}
            hasRating={v.hasRating}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
