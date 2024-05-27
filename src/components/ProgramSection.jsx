import ProgramCard from "./ProgramCard";
import TitleBar from "./TitleBar";

const ProgramData = [
  {
    id: 1,
    image: "1",
    title: "2024 우아한테크캠프 7기",
    dateOfReceipt: "24-04-03(수) 13:00 ~ 24-04-10(수) 23:59",
    examDate: "24-04-13(토) 13:00 ~ 24-04-20(토) 17:00",
  },
  {
    id: 2,
    image: "2",
    title: "2023 Winter Coding - 겨울방학 스타트업 인턴 프로그램",
    dateOfReceipt: "24-10-16(월) 10:00 ~ 24-11-02(목) 17:00",
    examDate: "24-11-04(토) 13:00 ~ 24-11-04(토) 16:00",
  },
];

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
