import React from "react";
import Dropdown from "@/components/DropDown";
import { element1,element2,element3,element4,element5 } from '../sections/Header/data'

export default {  
  title: "component/Dropdown",
  component: Dropdown,
  argTypes: {
    name: {
      options: ["Dropdown1", "Dropdown2","Dropdown3"],
      control: { type: "select" },
    },
    data: {
      options: [element1,element2,element3,element4,element5],
      control: { type: "select" },
    }
  }
};

const Template = (args) => <Dropdown {...args} />;
export const Dropdown1 = Template.bind({});
Dropdown1.args = {
  children: "What we do", 
  data: element1, 
  isIcon: true,
};
export const Dropdown2 = Template.bind({});
Dropdown2.args = {
  children: "Our Work", 
  href: "https://www.google.com"
};
export const Dropdown3 = Template.bind({});
Dropdown3.args = {
  children: "solutions", 
  data: element2, 
  isIcon: true,
};