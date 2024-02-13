const Template = ({ data, category, index }) => {
  return (
    <div className="relative flex mt-8 tablet:flex-col tablet:mt-4">
      <div className="flex justify-end w-32 tablet:w-full tablet:justify-start">
        <h2
          className={`text-lg text-right gradient__text tablet:text-xl tablet:mb-4 ${
            category === "education"
              ? "bg-gradient-green text-transparent bg-clip-text inline-block"
              : category === "work"
              ? "bg-gradient-green text-transparent bg-clip-text inline-block"
              : "bg-gradient-green text-transparent bg-clip-text inline-block"
          }
            ${index >= 1 ? "hidden" : ""}
            `}
        >
          {category}
          <span className="mx-2 tablet:hidden">•</span>
        </h2>
      </div>
      {/* Details Start */}
      <div className="relative w-full">
        <h2 className="text-lg tablet:text-xl">{data.title}</h2>
        <h3 className="text-sm my-1 tablet:text-base">{data.subTitle}</h3>
        <p className="text-2xs font-semibold ml-auto">
          {data.startDate}{" "}
          <span className={data.startDate ? "mx-1" : "hidden"}> ━ </span>{" "}
          {data.endDate}
        </p>

        <p className="text-2xs mt-4 tablet:text-xs">{data.brief}</p>

        {/* List Start */}
        <p className="text-2xs font-bold mt-4 tablet:text-xs">
          {data.listTitle}
        </p>

        <ul className="w-4/5 my-4 ml-2">
          {data.listItems && data.listItems.length > 0 && (
            <>
              {data.listItems.map((listItem: any, i: number) => (
                <li
                  key={i}
                  className="text-2xs ml-2 my-1 before:content-['-'] before:mr-1 tablet:text-xs"
                >
                  {listItem.item}
                </li>
              ))}
            </>
          )}
        </ul>
        <hr
          className={`mt-8 w-full ${category === "Interests" ? "hidden" : ""}`}
        />
      </div>
    </div>
  );
};

export default Template;
