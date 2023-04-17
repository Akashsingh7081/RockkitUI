import Image from "next/image";
import Heading from "@/elements/Heading";
import Cards from "@/components/Cards";

// const benefitsectionCard = [
//   { key: 1,text: "Access to the pool of IT experts", img: "/images/bg1.svg",gradient: "test1",},
//   { key: 2,text: "No need to hire developers on your payroll just hire them and get your desired team to complete the projects swiftly.",img: "/images/bg2.svg",gradient: "test2",},
//   {key: 3, text: "Freedom to manage and guide the team as per your requirement or planning",img: "/images/bg3.svg",gradient: "test3",},
//   { key: 4,text: "One-time Investment and less maintenance cost.",img: "/images/bg4.svg",gradient: "test4",},
//   {key: 5,text: "One-time Investment and less maintenance cost.",img: "/images/bg5.svg",gradient: "test5", },
// ];

const BenefitSection = ({ benefitSectionItems }) => {
  const data = benefitSectionItems.benefitCards.data[0].attributes.card;
  const Title = benefitSectionItems.benefitCards.data[0].attributes.Title;
  
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center px-10 lg:px-0 ">
        <div className="mb-12 lg:pt-0 pt-[66px] text-center">
          <Heading priority={2} color="text-black" leading="15">
            {Title}
          </Heading>
        </div>

        <div className="flex flex-wrap gap-12 justify-around lg:mt-[118px] mt-[81px]">
          {data.map(({ id, Text, Icon, gradient }) => {
            return (
              <div key={id} className="w-[324px]">
                <Cards gradient={gradient} img={Icon.data.attributes.url} text={Text} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
