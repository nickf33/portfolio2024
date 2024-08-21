import { IoIosArrowRoundForward } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

const CustomInput = ({ height, error, touched, ...props }) => {
  return (
    <div
      className={`relative flex items-center border-b w-full border-white-dark ${height}`}
    >
      <div
        className={`p-1 text-[0.5rem] rounded-full border mt-[-0.25rem] ml-6 font-bold transition origin-left duration-300 ${
          touched
            ? error
              ? "scale-125 bg-gradient-red text-white-dark border-0"
              : "scale-100 bg-gradient-green text-blue-dark border-0"
            : ""
        }`}
      >
        {error ? <MdErrorOutline /> : <IoIosArrowRoundForward />}
      </div>
      <input
        {...props}
        className="ml-4 resize-none	w-full text-2xs placeholder:text-2xs transition origin-top-left placeholder-white-darker focus:placeholder-white-dark focus:scale-y-110 h-full tablet:placeholder:text-xs"
      />
      {touched && error ? (
        <div className="absolute top-6 right-4 text-xs bg-gradient-red text-transparent bg-clip-text inline-block text-[12px]">
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default CustomInput;
