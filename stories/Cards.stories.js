import Cards from "@/components/Cards";
export default {
  title: "component/Cards",
  component: Cards,
//   argTypes: {
//     txtSize: {
//       options: ["sm", "md", "lg"],
//       control: { type: "radio" },
//     },
//     fontWeight: {
//         options: ["font-normal", "font-medium", "font-semibold"],
//         control: { type: "select" },
//       },
//       gradient: {
//         options: ["blue", "pink", "yellow", "purple"],
//         control: { type: "select" },
//       },
//       row: {
//         options: [true, false],
//         control: { type: "radio" },
//       },
//   },


};
const Template = (args) => <Cards {...args} />;
export const Card = Template.bind({});
Card.args = {
    img:"/images/bg1.svg",
    hireCard:true,
    hirenum: "3", 
    gradient: "test4",
    color: "text-voilet",
    bgColor: "bg-voilet-100",
    text: "Lack of specific resources for particular technology-related projects."
};