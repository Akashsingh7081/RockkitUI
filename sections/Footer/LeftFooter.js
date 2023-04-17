import Text from "@/elements/Text";
import Imagewrapper from "@/elements/Imagewrapper";
import Image from "next/image";
import Link from "next/link";

const LeftFooter = () => {
  return (
    <div className="flex flex-col lg:w-1/2 lg:pl-[60px] lg:pt-[96px] bg-primary">
      <Link href="https://blog.logrocket.com/nestjs-vs-express-js/">
        <Imagewrapper
          src="/images/FooterImg.svg"
          alt="logo image"
          size="2xl"
        />
      </Link>
      <div className="pt-[26px]">
        <Text
          size="xl"
          color="text-gray-500"
          lineHeight="10"
          fontWeight="font-semibold"
        >
          Where Technical Chaos Meets Excellence.
        </Text>
      </div>

      <div className="flex flex-col pt-[60px]">
        <div className="flex items-center">
          <Image
            src="/images/phone.svg"
            height={20}
            width={19}
            alt="logo_image"
          />
          <div className="pl-[30px]">
            <Text
              size="xl"
              color="text-gray-200"
              lineHeight="10"
              fontWeight="font-semibold"
            >
              +46 6354 837 289
            </Text>
          </div>
        </div>
        <div className="flex pt-3 items-center">
            
          <Image
            src="/images/email.svg"
            height={14.38}
            width={22.85}
            alt="logo_image"
          />
          
          <div className="pl-[30px]">
            <Text
              size="xl"
              color="text-gray-200"
              lineHeight="10"
              fontWeight="font-semibold"
            >
              ruben.viera@example.com
            </Text>
          </div>
        </div>
        <div className="flex pt-3 items-start">
            <div className="pt-1 pl-1">
          <Image
            src="/images/map.svg"
            height={20}
            width={14}
            alt="logo_image"
          />
          </div>
          <div className="pl-[32px] w-1/2">
            <Text
              size="xl"
              color="text-gray-200"
              lineHeight="10"
              fontWeight="font-semibold"
            >
              Rockit Team, LLC, PO BOX 61363 FortMyers, FL 00906
             
            </Text>
          </div>
        </div>
      </div>

      <div className="flex px-8 py-12">
        <div className="px-5">
          <Image
            src="/images/linkedin.svg"
            height={26}
            width={26}
            alt="logo_image"
          />
        </div>
        <Image src="/images/fb.svg" height={26} width={26} alt="logo_image" />
      </div>
    </div>
  );
};

export default LeftFooter;
