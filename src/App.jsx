import Category from "./components/Category";
import EducationSection from "./components/EducationSection";
import Header from "./components/Header";
import SlideBanner from "./components/SlideBanner";
import LectureSection from "./components/LectureSection";

const App = () => {
  return (
    <div className="font-noto-sans-kr">
      <Header />
      <SlideBanner />
      <Category />
      <EducationSection />
      <LectureSection />
    </div>
  );
};

export default App;
