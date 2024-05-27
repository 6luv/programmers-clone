import PositionCard from "./PositionCard";
import TitleBar from "./TitleBar";

const PositionSection = () => {
  return (
    <section className="max-w-[1160px] w-full mx-auto ">
      <TitleBar title="다른 개발자들이 많이 지원한 포지션" />
      <PositionCard />
    </section>
  );
};

export default PositionSection;
