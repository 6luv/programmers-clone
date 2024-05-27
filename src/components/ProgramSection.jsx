import ProgramCard from "./ProgramCard";
import TitleBar from "./TitleBar";
import ProgramData from "../data/programData.json";

const ProgramSection = () => {
  return (
    <section>
      <TitleBar title="채용 프로그램" />
      <div className="container-style grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        {ProgramData.map((v) => (
          <ProgramCard
            key={v.id}
            image={v.image}
            title={v.title}
            dateOfReceipt={v.dateOfReceipt}
            examDate={v.examDate}
          />
        ))}
      </div>
    </section>
  );
};

export default ProgramSection;
