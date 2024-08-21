const FilterButton = ({
  text,
  category,
  selectedCategory,
  handleCategoryClick,
}) => {
  return (
    <button
      className={`flex py-1 px-4 ml-4 text-2xs rounded-full bg-blue-dark border border-white-dark tracking-wide transition duration-300 hover:bg-white-dark hover:border-blue-dark hover:text-blue-dark active:bg-green-light link lgMobile:justify-between lgMobile:ml-0 ${
        selectedCategory === category
          ? "bg-white-dark text-blue-dark"
          : "text-white-dark"
      }`}
      onClick={() => handleCategoryClick(category)}
    >
      {text}
    </button>
  );
};

export default FilterButton;
