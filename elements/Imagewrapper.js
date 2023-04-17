import Image from "next/image";
const Imagewrapper = ({ src, alt, size }) => {
    return (
      <div className={`relative ${
        size == "2xs"
          ? "h-[20px] w-[20px]"
          : size == "xs"
          ? "h-[15px] w-[18px] lg:w-[22px] lg:h-[18px]"
          : size == "sm"
          ? "h-[17px] w-[17px] lg:w-[26px] lg:h-[26px]"
          : size == "md"
          ? "h-[54px] w-[54px]"
          : size == "lg"
          ? "h-[38px] w-[58px]"
          : size == "xl"
          ? "h-[45px] w-[135px]"
          : size == "2xl"
          ? "h-[34px] w-[103px] lg:w-[159px] lg:h-[53px]"
          : "h-[280px] w-[280px] lg:w-[736px] lg:h-[736px]"
      }
      `} >
        <Image src={src} alt={alt} fill className="object-contain" sizes="300px"/>
    </div>
    );
  };
  export default Imagewrapper;