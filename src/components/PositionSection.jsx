import PositionCard from "./PositionCard";
import TitleBar from "./TitleBar";

const PositionData = [
  {
    id: 1,
    image: "Artboard-squre",
    position: "플랫폼 서비스 개발 팀원",
    company: "히비스",
  },
  {
    id: 2,
    image: "xinics",
    position: "이러닝 웹 솔루션 개발자",
    company: "Xinics",
  },
  {
    id: 3,
    image: "finda",
    position: "주니어 백엔드 개발자 (마이데이터)",
    company: "핀다(FINDA)",
  },
  {
    id: 4,
    image: "Nudge",
    position: "[병역특례] 프론트엔드개발 산업기능요원",
    company: "넛지헬스케어",
  },
  {
    id: 5,
    image: "Nudge",
    position: "[병역특례] 백엔드개발(Node.js) 산업기능요원",
    company: "넛지헬스케어",
  },
  {
    id: 6,
    image: "SCWin",
    position: "[Graduate]Software Engineer",
    company: "사카드코리아",
  },
];

const PositionSection = () => {
  return (
    <section>
      <TitleBar title="다른 개발자들이 많이 지원한 포지션" />
      <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {PositionData.map((v) => (
          <PositionCard
            key={v.id}
            image={v.image}
            position={v.position}
            company={v.company}
          />
        ))}
      </div>
    </section>
  );
};

export default PositionSection;
