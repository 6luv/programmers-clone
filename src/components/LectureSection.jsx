import EducationCard from "./EducationCard";
import TitleBar from "./TitleBar";

const LectureData = [
  {
    id: 1,
    image: "/images/lectures/1",
    title: "[1기] K-Digital Training: 클라우드 기반 백엔드 엔지니어링",
  },
  {
    id: 2,
    image: "/images/lectures/2",
    title: "코딩테스트 연습 힌트 모음",
  },
  {
    id: 3,
    image: "/images/lectures/3",
    title: "[1기] K-Digital Training: 클라우드 기반 프론트엔드 엔지니어링",
  },
];

const LectureSection = () => {
  return (
    <section>
      <TitleBar title="추천 강의" />
      <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {LectureData.map((v) => (
          <EducationCard key={v.id} image={v.image} title={v.title} />
        ))}
      </div>
    </section>
  );
};

export default LectureSection;
