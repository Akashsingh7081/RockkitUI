import Image from "next/image";
import Link from "next/link";
import ListItem from "@/elements/ListItem";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import { element1, element2, element3, element4, element5 } from "./data";
import Heading from "@/elements/Heading";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Imagewrapper from "@/elements/Imagewrapper";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between py-6 container mx-auto">
        <Link
          href="https://blog.logrocket.com/nestjs-vs-express-js/"
          className="hidden lg:block"
        >
          <Imagewrapper
            src="/images/rockit_logo.svg"
            alt="logo image"
            size="xl"
          />
        </Link>
       
        <section className="flex lg:hidden">
          <div onClick={() => setToggle((open) => !open)} className="pt-4 pl-5">
            <AiOutlineMenu />
          </div>
          <div className={toggle ? "showToggler" : "hideToggler"}>
            <div
              className="absolute top-10 left-5"
              onClick={() => setToggle(false)}
            >
              <AiOutlineMenu />
            </div>
            <div className="absolute left-10 flex flex-col items-left justify-between min-h-[250px]">
              <Dropdown href="https://www.youtube.com" size="xl">
                What we do
              </Dropdown>
              <div className="border border-gray-500 lg:mt-[70px] mt-0 lg:mb-[90px] mb-0 w-100%"></div>
              <Dropdown href="https://www.youtube.com" size="xl">
                Our Work
              </Dropdown>
              <div className="border border-gray-500 lg:mt-[70px] mt-0 lg:mb-[90px] mb-0 w-100%"></div>
              <Dropdown href="https://www.youtube.com" size="xl">
                Solutions
              </Dropdown>
              <div className="border border-gray-500 lg:mt-[70px] mt-0 lg:mb-[90px] mb-0 w-100%"></div>
              <Dropdown href="https://www.youtube.com" size="xl">
                Services
              </Dropdown>
              <div className="border border-gray-500 lg:mt-[70px] mt-0 lg:mb-[90px] mb-0 w-100%"></div>
              <Dropdown href="https://www.youtube.com" size="xl">
                Hire Us
              </Dropdown>
              <div className="border border-gray-500 lg:mt-[70px] mt-0 lg:mb-[90px] mb-0 w-100%"></div>
              <Dropdown href="https://www.youtube.com" size="xl">
                More
              </Dropdown>
              <div className="border border-gray-500 lg:mt-[70px] mt-0 lg:mb-[90px] mb-0 w-100%"></div>
            </div>
          </div>
        </section>


        <ul className="mt-3 hidden lg:flex items-center justify-between font-bold lg:w-6/12">
          <Dropdown data={element1} isIcon size="xl">
            What we do
          </Dropdown>
          <Dropdown href="https://www.youtube.com" size="xl">
            Our Work
          </Dropdown>
          <Dropdown data={element2} isIcon size="xl">
            Solutions
          </Dropdown>
          <Dropdown data={element3} isIcon size="xl">
            Services
          </Dropdown>
          <Dropdown data={element4} isIcon size="xl">
            Hire Us
          </Dropdown>
          <Dropdown data={element5} isIcon size="xl">
            More
          </Dropdown>
        </ul>
        <div className="hidden lg:block">
          <Button
            variant="primary"
            size="md"
            href="https://sass-lang.com/documentation/syntax#scss"
          >
            Let's Talk
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Header;
