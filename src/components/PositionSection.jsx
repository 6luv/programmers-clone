import PositionCard from "./PositionCard";
import TitleBar from "./TitleBar";
import PositionData from "../data/positionData.json";

const PositionSection = () => {
  return (
    <section>
      <TitleBar title="다른 개발자들이 많이 지원한 포지션" />
      <div className="container-style grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
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
