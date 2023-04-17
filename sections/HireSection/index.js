import Image from "next/image";
import Heading from "@/elements/Heading";
import Cards from "@/components/Cards";

// const hiresectionCard= [{key: 1,hireCard:true, hirenum: "1", color: "text-pink", bgColor: "bg-pink-100", text: "Inadequate time for a short-term or contractual project so that you can focus on your other important tasks."},
// {key: 2, hireCard:true,hirenum: "2", color: "text-blue", bgColor: "bg-blue-100", text: "You are not able to handle all work-related pressure and require a team that can assist in completing a specific project and for long-term relations."},
// {key: 3,hireCard:true, hirenum: "3", color: "text-voilet", bgColor: "bg-voilet-100", text: "Lack of specific resources for particular technology-related projects."},
// {key: 4,hireCard:true, hirenum: "4", color: "text-pink", bgColor: "bg-pink-100", text: "You require a tech partner which can handle all the risks and work-related obligations be it software practices or procedures."},
// {key: 5,hireCard:true, hirenum: "5", color: "text-blue", bgColor: "bg-blue-100", text: "Modest development work within stiff deadlines."},]

const HireSection = ({hireSectionItems}) => {
  // console.log("hireSectionItems",hireSectionItems.card);
  return (
   <div className="outerContainer relative
   before:content-[url('/images/innerImg.svg')] 
    before:absolute before:right-0 before:top-[-52px] before:z-10
    before:hidden before:lg:block
    after:content-[url('/images/hire_outer.svg')] 
    after:absolute after:right-0 after:top-[-130px]
    after:hidden after:lg:block">

    <div className="container mx-auto">
      <div className="flex flex-col items-center ">
      <div className="lg:mb-12 text-center lg:w-7/12">
        <Heading priority={2} color="text-black" leading="15">
          {/* When should you hire a dedicated team? */}
          {hireSectionItems.Title}
        </Heading>
      </div>

      <div className="flex lg:flex-row flex-col flex-wrap px-6">
      {hireSectionItems.card.map(({ id,num, color, bgColor, Text })=> {
          return (
            <div className="lg:w-[324px] lg:m-8 m-4" key={id}>
              <Cards
                 hireCard
                 hirenum={num}
                 color={color}
                 bgColor={bgColor}
                 text={Text}
              />
            </div>
          );
        })}
      </div>
    </div>
    </div>
    </div>
  );
};

export default HireSection;
