import Heading from "@/elements/Heading";
export default {
  title: "elements/Heading",
  component: Heading,
  argTypes: {
    priority: {
      options: [1,2,3,4,5,6],
      control: { type: "radio" },
    },
  },
};
const Template = (args) => <Heading {...args} />;
export const Headings = Template.bind({});
Headings.args = {
  priority: 1,
  children: "Dedicated Team",
  color: "text-black",
};