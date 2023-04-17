import React from "react";
import Link from "@/elements/ListItem";
import ListItem from "@/elements/ListItem";

export default {  
  title: "elements/Link",
  component: ListItem,
  argTypes: {
    text: {
      options: ["What we do", "Our Work", "Solutions", "Services", "Hire Us", "More"],
      control: { type: "select" },
    },
    href: {
      options: ["https://solito.dev/", "https://blog.logrocket.com/nestjs-vs-express-js/"],
      control: { type: "select" },
    }
  }
};

const Template = (args) => <Link {...args} />;
export const LinkElement = Template.bind({});
LinkElement.args = {
    children: "LinkItem",
    href: "https://solito.dev/"
};