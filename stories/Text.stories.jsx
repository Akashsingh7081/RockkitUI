import Text from "@/elements/Text";
export default {
  title: "elements/Text",
  component: Text,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    fontWeight: {
        options: ["font-normal", "font-medium", "font-semibold"],
        control: { type: "select" },
      },
  },
};
const Template = (args) => <Text {...args} />;
export const TextComponent = Template.bind({});
TextComponent.args = {
  size: "lg",
  children: "hello world",
  color: "text-black-500",
  fontWeight: "font-semibold",
};