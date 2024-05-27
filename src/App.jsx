import Category from "./components/Category";
import EducationSection from "./components/EducationSection";
import Header from "./components/Header";
import SlideBanner from "./components/SlideBanner";

const App = () => {
  return (
    <div className="font-noto-sans-kr">
      <Header />
      <SlideBanner />
      <Category />
      <EducationSection />
    </div>
  );
};

export default App;
