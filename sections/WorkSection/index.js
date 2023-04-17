import Image from "next/image";
import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import Button from "@/components/Button";

const WorkSection = ({workSectionItems}) => {
  // console.log("workItem",workItem);
  return ( 
    <div className="outerContainer relative
    before:content-[url('/images/inner_work.svg')] 
    before:absolute before:left-0 before:top-[-52px] before:z-10
    before:hidden before:lg:block
    after:content-[url('/images/outer_work.svg')] 
    after:absolute after:left-0 after:top-[-130px]
    after:hidden after:lg:block">
       
    
    <div className="container flex flex-col items-center relative mx-auto lg:p-20 lg:pt-0 px-8 pt-[66px]">
      <div className="relative">
        <Heading color="text-black" priority={2} leading="15">
        {workSectionItems.Title}
        </Heading>
      </div>
      <div className="lg:mt-[60px] lg:px-12 text-center lg:text-left pt-[20px] lg:pt-0">
        <Text
          color="text-gray"
          fontWeight="font-medium"
          lineHeight="10.1"
          size="sm"
        >
             <div dangerouslySetInnerHTML={{ __html: workSectionItems.Description}} />
        </Text>
      </div>
      {/* <div className="lg:mt-12 lg:pl-12 lg:pr-14 text-center lg:text-left mt-8">
        <Text
            color="text-gray"
            fontWeight="font-medium"
            lineHeight="10.1"
            size="sm"
        >
          For hassle-free and effective communication, the client will be
          assigned project managers who will remain in touch with them providing
          all the latest updates about the ongoing project and estimated time
          for the completion of the same.
        </Text>
      </div> */}
    </div>
    </div>
  );
};

export default WorkSection;
