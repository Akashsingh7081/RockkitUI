import Image from "next/image";
import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import Button from "@/components/Button";

const HeroSection = ({heroSection}) => {
  return (
    <div
      className="outerContainer relative
    before:content-[url('/images/leftImg.svg')] 
    before:absolute before:left-0 before:top-44
    before:hidden before:lg:block
    after:content-[url('/images/rightImg.svg')] 
    after:absolute after:right-0 after:top-[370px]
    after:hidden after:lg:block"
    >
      <div
        className="flex flex-col items-center lg:p-40 p-6 container mx-auto relative 
    before:content-[url('/images/bubble_thought.svg')] 
    before:absolute before:left-[127px] 
    before:hidden before:lg:block
    after:content-[url('/images/noun_rocket.svg')] 
    after:absolute after:right-16 after:top-[350px]
    after:hidden after:lg:block"
      >
        <div
          className="mb-12 relative  
        before:content-[url('/images/noun_idea.svg')] 
        before:absolute before:bottom-40 before:left-52
        before:hidden before:lg:block"
        >
          <Heading color="text-black" priority={1} leading="15">
            {/* Dedicated Team */}
            {heroSection.Title}
          </Heading>
        </div>
        <div className="lg:w-3/4 " rel="preload">
          <Text
            centertext
            color="text-gray"
            fontWeight="font-semibold"
            lineHeight="12"
            size="3xl"
          >
            {/* Upscale your business efficiency by hiring dedicated software
            developers with leverage to screen and manage the whole team. */}
            {heroSection.Description}
          </Text>
        </div>
        <div className="lg:pt-24 pt-[48px]">
          <Button
            variant="secondary"
            size="lg"
            href="https://sass-lang.com/documentation/syntax#scss"
          >
            Hire Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
