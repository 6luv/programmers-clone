const TitleBar = ({ title }) => {
  return (
    <section className="w-[1160px] mt-14 flex justify-between mx-auto">
      <div className="text-programmers-main text-[26px] font-bold">{title}</div>
      <button className="flex items-center text-[#667380] font-bold">
        더 보기
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="ml-0.5 text-[#667380] font-bold mt-0.5"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m9 16.34 4.58-4.59L9 7.16l1.41-1.41 6 6-6 6z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </section>
  );
};

export default TitleBar;
