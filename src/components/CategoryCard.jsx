const CategoryCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[120px] w-full mx-2">
      <button className="w-[72px] h-[72px] border-2 rounded-3xl p-5 flex items-center justify-center">
        {icon}
      </button>
      <div className="mt-4 text-base">{title}</div>
    </div>
  );
};

export default CategoryCard;
