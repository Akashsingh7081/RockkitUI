import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";
import Text from "@/elements/Text";

const Footer = (props) => {
  return (
    <div className="bg-primary">
    <div className="outerContainer">
      <div className="flex lg:flex-row flex-col mx-auto bg-primary p-10 lg:p-0">
        <LeftFooter />
        <div className="border border-gray-500 lg:mt-[70px] mt-0 lg:mb-[90px] mb-0 w-100%"></div>
        <RightFooter CompanyListFooterItems={props.CompanyListFooterItems} HireUsFooterItems={props.HireUsFooterItems}/>
      </div>
      <div className="lg:py-5 lg:pl-12 text-center lg:text-left">
        <Text
          size="xl"
          color="text-gray-500"
          lineHeight="10"
          fontWeight="font-semibold"
        >
          Copyright © 2021 rockIT - All Rights Reserved.
        </Text>
      </div>
    </div>
    </div>
  );
};

export default Footer;
