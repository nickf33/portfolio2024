import Image from "next/image";
import wavenoise from "@/app/image/wavenoise.gif";

export default function Background() {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-screen opacity-5">
        <Image src={wavenoise} alt="background gif" className="bg__img" />
        <div className="overlay"></div>
      </div>
    </>
  );
}
