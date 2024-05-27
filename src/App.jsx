import Category from "./components/Category";
import EducationSection from "./components/EducationSection";
import Header from "./components/Header";
import SlideBanner from "./components/SlideBanner";
import LectureSection from "./components/LectureSection";
import ProgramSection from "./components/ProgramSection";
import PositionSection from "./components/PositionSection";

const App = () => {
  return (
    <div className="font-noto-sans-kr">
      <Header />
      <SlideBanner />
      <Category />
      <EducationSection />
      <LectureSection />
      <ProgramSection />
      <PositionSection />
    </div>
  );
};

export default App;
