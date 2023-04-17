import Text from "@/elements/Text";
import ListItem from "@/elements/ListItem";
import Heading from "@/elements/Heading";

const RightFooter = (props) => {
   const data = props.CompanyListFooterItems[0].attributes.companyData;
   const data2 = props.HireUsFooterItems[0].attributes.HireUsfooterItem
   //console.log("data2",data2);
  return (
    <div className="lg:w-1/2 grid lg:grid-flow-col gap-28 lg:pl-[60px] bg-primary pt-24">
      <div>
        <Text color="text-gray-200" lineHeight="13" fontWeight="font-bold">
          {/* THE COMPANY */}
          {props.CompanyListFooterItems[0].attributes.Title}
        </Text>
        <div className="inline-flex flex-col px-[22px] pt-6 h-[282px] justify-between">
          {data.map(({id, text, link, footerLink }) => {
            return (
              <ListItem key={id} href={link} linkType={footerLink}>
                {text}
              </ListItem>
            );
          })}
          {/* <ListItem
            href="https://www.google.com"
            linkType="footer"
            
          >
            About Us
          </ListItem>
          <ListItem
            href="https://www.google.com"
            linkType="footer"
           
          >
            Our Work
          </ListItem>
          <ListItem
            href="https://www.google.com"
            linkType="footer"
            
          >
            Services
          </ListItem>
          <ListItem
            href="https://www.google.com"
            linkType="footer"
          >
            Solutions
          </ListItem>
          <ListItem
            href="https://www.google.com"
            linkType="footer"
          >
            What we do
          </ListItem>
          <ListItem
            href="https://www.google.com"
            linkType="footer"
          >
            Blogs
          </ListItem>
          <ListItem
            href="https://www.google.com"
            linkType="footer"
          >
            Connect Us
          </ListItem> */}
        </div>
      </div>

      <div>
        <Text color="text-gray-200" lineHeight="13" fontWeight="font-bold">
          {/* HIRE US */}
          {props.HireUsFooterItems[0].attributes.Title}
        </Text>
        <div className="inline-flex flex-col px-[18px] pt-6 lg:h-[324px] justify-between">
        {data2.map(({id, text, link, footerLink }) => {
            return (
              <ListItem key={id} href={link} linkType={footerLink}>
                {text}
              </ListItem>
            );
          })}
          {/* <ListItem href="https://www.google.com" linkType="footer">
            React Developer{" "}
          </ListItem>
          <ListItem href="https://www.google.com" linkType="footer">
            React Native Developer
          </ListItem>
          <ListItem href="https://www.google.com" linkType="footer">
            Angular Developer
          </ListItem>
          <ListItem href="https://www.google.com" linkType="footer">
            Laravel Developer
          </ListItem>
          <ListItem href="https://www.google.com" linkType="footer">
            Node Developer
          </ListItem>
          <ListItem href="https://www.google.com" linkType="footer">
            Flutter Developer
          </ListItem>
          <ListItem href="https://www.google.com" linkType="footer">
            UX Designer
          </ListItem>
          <ListItem href="https://www.google.com" linkType="footer">
            Buisness Analyst
          </ListItem> */}
        </div>
      </div>
    </div>
  );
};
export default RightFooter;
