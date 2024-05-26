import Slider from "react-slick";
import SlideBannerCard from "./SlideBannerCard";
import { useRef } from "react";

const SlideBannerData = [
  {
    id: 1,
    label: "이벤트",
    title1: "⭐알림신청 이벤트⭐",
    title2: "수료생 극찬! 실무 중심 프로젝트",
    description: "지금 데브코스 알림신청하고 커피쿠폰 받아가세요!",
  },
  {
    id: 2,
    label: "데브코스",
    title1: "취업 전략 전문가 자체 보유",
    title2: "프론트엔드 데브코스",
    description:
      "1,700개 기업의 채용·평가 데이터를 집중 분석한 프론트엔드 과정",
    isBlack: true,
  },
  {
    id: 3,
    label: "데브코스",
    title1: "대기업 채용 데이터 집중 분석",
    title2: "취업은 백엔드 데브코스에서!",
    description: "실무에 최적화 된 커리큘럼으로 현업에서 바로 쓰는 백엔드 과정",
    isBlack: true,
  },
];

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
