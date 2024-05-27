import Slider from "react-slick";
import SlideBannerCard from "./SlideBannerCard";
import { useRef } from "react";
import SlideBannerData from "../data/slideBannerData.json";
import { useEffect } from "react";
import { useState } from "react";

const SlideBanner = () => {
  const [page, setPage] = useState(0);

  const sliderRef = useRef();

  const onClickPrev = () => {
    sliderRef.current.slickPrev();
    getCurrentPage();
  };

  const onClickNext = () => {
    sliderRef.current.slickNext();
    getCurrentPage();
  };

  const getCurrentPage = () => {
    setPage(sliderRef.current.innerSlider.state.currentSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentPage();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
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
      <div className="absolute bottom-[60px] left-[450px] -translate-x-1/2">
        <div className="flex rounded-[100px] text-white bg-[#2c323b] font-normal py-1 px-2">
          <button onClick={onClickPrev}>
            <svg
              data-v-5fc24e94=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition rotate-180 text-white"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m9 16.34 4.58-4.59L9 7.16l1.41-1.41 6 6-6 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="flex">
            <div>{page + 1}</div>
            <div className="text-gray-200 mx-1">/</div>
            <div>3</div>
          </div>
          <button onClick={onClickNext}>
            <svg
              data-v-5fc24e94=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m9 16.34 4.58-4.59L9 7.16l1.41-1.41 6 6-6 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideBanner;
