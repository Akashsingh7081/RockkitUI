import React from "react";
import { Children } from "react/cjs/react.production.min";
import Button from "../components/Button/index";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "tertiary"],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md","lg"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const ButtonBtn = Template.bind({});
ButtonBtn.args = {
  children: "Let's Talk",
  variant: "tertiary",
  size: "sm",
  href:"https://sass-lang.com/documentation/syntax#scss",
};
