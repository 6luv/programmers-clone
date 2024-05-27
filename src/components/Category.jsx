import CategoryCard from "./CategoryCard";

const CategoryData = [
  {
    id: "1",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="h-24 w-24"
      >
        <path
          fill="#2C323B"
          fillRule="evenodd"
          d="M23.189 8.888 11.976 2.786.609 9l3.93 2.136v6l7.437 4.078 7.438-4.078V11.14l1.9-.96v6.932h1.875zm-18.646.113 7.433-4.013L19.457 9l-7.48 4.085zm1.87 7.013V12.19l5.562 3.023 5.564-2.975v3.776l-5.563 3.072z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    title: "무료 국비 강의",
  },
  {
    id: "2",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 32 32"
        className="h-24 w-24"
      >
        <path
          fill="#2C323B"
          fillRule="evenodd"
          d="M5.63 4h20.74c1.637 0 2.963 1.343 2.963 3v18c0 1.657-1.326 3-2.963 3H5.63c-1.637 0-2.963-1.343-2.963-3V7c0-1.657 1.326-3 2.963-3m0 6v15h20.74V10zm2.963-3v1.5H5.63V7zm4.444 0v1.5h-2.963V7zm-1.078 6.293 1.415 1.414-2.626 2.626 2.626 2.627-1.415 1.414-4.04-4.04zm9.293 4.04-2.626-2.626 1.414-1.414 4.04 4.04-4.04 4.04-1.414-1.413zm-4.88-4.941-2.667 9.333 1.923.55 2.667-9.334z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    title: "코딩테스트 문제",
  },
  {
    id: "3",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="h-24 w-24"
      >
        <path
          fill="#000"
          d="M20 6c1 0 2 1 2 2v12c0 1-1 2-2 2H10c-1 0-2-1-2-2h12zm-4-4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zM6 4v12h10V4zm8 8H8v-2h6zm0-4H8V6h6z"
        ></path>
      </svg>
    ),
    title: "수강 중인 강의",
  },
  {
    id: "4",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="h-24 w-24"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M9 7V5.961h6V7zm8 0V5.961C17 5.634 16.6 4 15 4H9c-.667 0-2 .392-2 1.961V7H5c-.667 0-2 .4-2 2v10c0 .667.4 2 2 2h14c.667 0 2-.4 2-2V9c0-.667-.5-2-2.5-2zM5 19V9h14v10z"
          clipRule="evenodd"
        ></path>
        <path fill="#000" d="M9 10h6v2H9z"></path>
      </svg>
    ),
    title: "채용 공고",
  },
  {
    id: "5",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="h-24 w-24"
      >
        <path
          fill="#000"
          d="m14 6-1-2H5v17h2v-7h5l1 2h7V6zm4 8h-4l-1-2H7V6h5l1 2h5z"
        ></path>
      </svg>
    ),
    title: "채용 프로그램",
  },
  {
    id: "6",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="h-24 w-24"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M7 14H4v7h9v-2h6v-3.667L24 12l-5-3.333V5h-7.126A4.005 4.005 0 0 0 8 2C5.795 2 4 3.79 4 6a4.005 4.005 0 0 0 3 3.874zm2 0h4v3h4v-1.667L12 12l5-3.333V7h-5.126A4.012 4.012 0 0 1 9 9.874zm9-4 3 2-3 2-3-2zM6 16h5v3H6zM6 6c0-1.105.888-2 2-2 1.105 0 2 .888 2 2 0 1.105-.888 2-2 2-1.105 0-2-.888-2-2"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    title: "스킬체크",
  },
  {
    id: "7",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="h-24 w-24"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="m9.5 17 2.5 2.5 2.5-2.5H16v6l-4-2-4 2v-6zM12 .515 14.485 3H18v3.515L20.485 9 18 11.485V15h-3.515L12 17.485 9.515 15H6v-3.515L3.515 9 6 6.515V3h3.515zM12 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    title: "코딩역량인증시험",
  },
];

const Categoty = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-center">
        {CategoryData.map((v) => (
          <CategoryCard key={v.id} icon={v.icon} title={v.title} />
        ))}
      </div>
    </div>
  );
};

export default Categoty;
