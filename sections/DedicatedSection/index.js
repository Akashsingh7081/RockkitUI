import Image from "next/image";
import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import Button from "@/components/Button";
import Imagewrapper from "@/elements/Imagewrapper";

const DedicatedSection = ({dedicatedSection}) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center lg:px-20 px-[20px] lg:pt-[40px] pt-[18px]">
      <div className="p-3 text-center ">
        <Heading color="text-black" priority={2} leading="15">
          {/* What is a Dedicated Team? */}
          {dedicatedSection.Title}
        </Heading>
      </div>

      <div className="lg:mt-4 lg:pl-[55px] lg:w-3/4">
        <Text
          centertext
          color="text-gray"
          fontWeight="font-medium"
          lineHeight="11"
          size="2xl"
        >
          {/* A dedicated team is a concept of hiring resources and tech enthusiasts
          for a particular project, it can be for a short period or a long term. */}
          {dedicatedSection.Description}
        </Text>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 lg:pt-44 order-last lg:text-left lg:order-first text-center">
          <Text
            color="text-gray"
            fontWeight="font-medium"
            lineHeight="11"
            size="sm"
          >
            This team of specialists and technical experts are screened,
            interviewed, and managed by the client. The client itself will
            decide the final team members and not just that, they can also add
            or remove the teammates as per their project requirements or needs.
          </Text>
        </div>
        <div className="lg:right-[66px] lg:top-1/3">
          <Imagewrapper
            src="/images/meeting.svg"
            alt="logo_image"
            
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default DedicatedSection;
