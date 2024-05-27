import CategorySection from "./components/CategorySection";
import EducationSection from "./components/EducationSection";
import Header from "./components/Header";
import SlideBanner from "./components/SlideBanner";
import LectureSection from "./components/LectureSection";
import ProgramSection from "./components/ProgramSection";
import PositionSection from "./components/PositionSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-noto-sans-kr">
      <Header />
      <SlideBanner />
      <CategorySection />
      <EducationSection />
      <LectureSection />
      <ProgramSection />
      <PositionSection />
      <Footer />
    </div>
  );
};

export default App;
