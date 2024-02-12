const FilterButton = ({
  text,
  category,
  selectedCategory,
  handleCategoryClick,
}) => {
  return (
    <button
      className={`py-1 px-4 ml-4 text-xs rounded-2xl bg-blue-dark border border-white-dark  tracking-wide transition duration-300 hover:bg-white-dark hover:border-blue-dark hover:text-blue-dark active:bg-green-light link lgMobile:ml-0 lgMobile:mr-4 ${
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
