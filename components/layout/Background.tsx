import Image from "next/image";
import wavenoise from "@/images/bg/wavenoise.gif";

export default function Background() {
  return (
    <>
      <div className="bg__wrap">
        <Image src={wavenoise} alt="background gif" className="bg__img" />
        <div className="overlay"></div>
      </div>
    </>
  );
}
