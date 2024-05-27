import Slider from "react-slick";
import SlideBannerCard from "./SlideBannerCard";
import { useRef } from "react";
import SlideBannerData from "../data/slideBannerData.json";

const SlideBanner = () => {
  // const [page, setPage] = useState(0);

  const sliderRef = useRef();

  // const onClickNext = () => {
  //   sliderRef.current.slickNext();
  //   getCurrentPage();
  // };

  // const onClickPrev = () => {
  //   sliderRef.current.slickPrev();
  //   getCurrentPage();
  // };

  // const getCurrentPage = () => {
  //   setPage(sliderRef.current.innerSlider.state.currentSlide);
  // };

  // useEffect(() => {
  //   console.log(sliderRef);
  // }, []);

  return (
    <div>
      <Slider
        ref={sliderRef}
        fade={true}
        autoplay={true}
        autoplaySpeed={3000}
        arrows={false}
      >
        {SlideBannerData.map((v) => (
          <SlideBannerCard
            key={v.id}
            id={v.id}
            label={v.label}
            title1={v.title1}
            title2={v.title2}
            description={v.description}
            isBlack={v.isBlack}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SlideBanner;
