const Footer = () => {
  return (
    <div className="container-style mt-[142px] mb-16 text-sm">
      <div className="flex justify-between items-start">
        <div className="flex">
          <div className="mr-10">
            <div className="text-[#44576c] mb-4 font-semibold">서비스</div>
            <div className="text-footer-content-gray mb-1">
              개발자용 프로그래머스
            </div>
            <div className="text-footer-content-gray">기업용 프로그래머스</div>
          </div>
          <div className="mr-10">
            <div className="text-[#44576c] mb-4 font-semibold">문의</div>
            <div className="text-footer-content-gray mb-1">FAQ/문의</div>
            <div className="text-footer-content-gray">
              교육 결제, 환불 관련 문의
            </div>
          </div>
          <div className="mr-10">
            <div className="text-[#44576c] mb-4 font-semibold">고객센터</div>
            <div className="text-footer-content-gray mb-1">
              대표번호: 1533-1886
            </div>
            <div className="text-footer-content-gray text-xs">
              운영시간: 오전 9시 ~ 오후 6시(주말 및 공휴일 휴무)
            </div>
            <div className="text-footer-content-gray text-xs">
              점심시간: 오후 12시 ~ 오후 1시
            </div>
          </div>
        </div>
        <button className="flex items-center text-xs border-[1px] border-[#d7e2eb] rounded-[3.2px] p-1">
          패밀리사이트
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="5"
            fill="none"
            className="ml-1"
          >
            <path fill="#263747" d="m4 4.866-4-4h8z"></path>
          </svg>
        </button>
      </div>
      <div className="mt-12">
        <div className="mb-2 text-footer-content-gray text-[13px] font-semibold">
          2024 프로그래머스
        </div>
        <div className="text-footer-content-gray text-[13px] max-w-[900px] w-full">
          (주)그렙 / 대표 임성수 / 서울특별시 서초구 강남대로 327, 2층
          프로그래머스(서초동, 대륭서초타워) / 사업자등록번호 220-88-75699 /
          통신판매업신고 제 2014-서울강남-03241호 / 직업정보제공사업 신고번호
          J1200020180027 / 프로그래머스 사이트의 모든 콘텐츠, 정보, UI, HTML
          소스 등에 대한 무단 복제, 전송, 배포, 크롤링, 스크래핑 등의 행위를
          거부하며, 이러한 행위는 관련 법령에 의해 엄격히 금지됩니다.
        </div>
      </div>
      <div className="flex mt-6 justify-between">
        <div className="flex">
          <div className="text-[#44576c] font-medium mr-4">
            개인정보처리방침
          </div>
          <div className="text-footer-content-gray mr-4">이용약관</div>
          <div className="text-footer-content-gray">프로그래머스 인재 채용</div>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="none"
            className="mr-2"
          >
            <path
              fill="#D2D2D2"
              fillRule="evenodd"
              d="M20.453 10.382c0-5.54-4.464-10.03-9.971-10.03S.51 4.842.51 10.382c0 5.007 3.646 9.156 8.413 9.909v-7.01H6.392v-2.899h2.532v-2.21c0-2.514 1.488-3.902 3.766-3.902 1.09 0 2.232.196 2.232.196v2.468h-1.257c-1.239 0-1.625.773-1.625 1.567v1.881h2.765l-.442 2.9H12.04v7.009c4.766-.753 8.413-4.902 8.413-9.909"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            fill="none"
            className="mr-2"
          >
            <path
              fill="#D2D2D2"
              fillRule="evenodd"
              d="M10.415.297h.05l.378.002c.634.004 1.832.017 3.095.058l.508.018c1.527.059 3.053.162 3.72.341.858.231 1.534.911 1.763 1.775.361 1.356.41 3.99.416 4.668v.325c-.007.678-.055 3.312-.416 4.668a2.506 2.506 0 0 1-1.763 1.775c-.63.17-2.026.27-3.466.33l-.508.02c-1.524.054-3.001.066-3.571.068l-.155.001H10.127a122.94 122.94 0 0 1-3.57-.069l-.51-.02c-1.439-.06-2.835-.16-3.465-.33A2.506 2.506 0 0 1 .82 12.152C.444 10.744.407 7.958.403 7.414v-.186C.407 6.685.444 3.9.819 2.491A2.506 2.506 0 0 1 2.582.716C3.878.366 8.425.308 9.905.3l.378-.002h.05zm-2.08 4.06v5.93l5.212-2.965z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="none"
            className=""
          >
            <path
              fill="#D2D2D2"
              fillRule="evenodd"
              d="M18.245.352c1.102 0 1.994.892 1.994 1.993v15.952a1.994 1.994 0 0 1-1.994 1.994H2.292a1.994 1.994 0 0 1-1.994-1.994V2.345c0-1.1.893-1.993 1.994-1.993zm-7.79 3.987H6.28v11.964h4.175c1.695 0 2.919-.259 3.67-.776.753-.518 1.13-1.35 1.13-2.497 0-.944-.25-1.678-.747-2.2a2.707 2.707 0 0 0-.92-.62c-.37-.158-.81-.258-1.32-.301.834-.075 1.461-.325 1.884-.752.428-.438.642-1.038.642-1.8 0-1.004-.362-1.759-1.085-2.265-.671-.466-1.655-.715-2.95-.749zm0 6.538c.787 0 1.35.142 1.692.425.341.282.512.746.512 1.392 0 .635-.162 1.08-.486 1.336-.33.256-.902.384-1.718.384H8.754v-3.537zm0-4.657c.376 0 .67.032.88.096.212.064.378.144.5.24.15.123.257.272.32.448.064.176.096.382.096.616 0 .267-.034.482-.104.645-.07.162-.17.297-.304.404a1.353 1.353 0 0 1-.538.248 3.71 3.71 0 0 1-.85.08H8.754V6.22z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
