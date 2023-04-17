const HeadingStyle = ({ priority,leading, color, ...props }) => {
  const StyledHeading = `h${priority}`;
  return (
    <>
      <StyledHeading
        className={`${color} ${
          priority == 1
            ? "lg:font-black lg:text-7xl text-2xl font-bold"
            : priority == 2
            ? "lg:font-bold lg:text-6xl text-2xl font-bold"
            : priority == 3
            ? "lg:font-bold lg:text-3xl text-xl font-semibold"
            : priority == 4
            ? "font-medium text-4xl"
            : priority == 5
            ? "font-semibold text-3xl "
            : priority == 6
            ? "font-bold text-2xl"
            : "font-thin text-xl"
        }   
        ${leading == '10' ? "lg:leading-10 leading-6":
        leading == '10.1' ? "lg:leading-11 leading-6":
        leading == '11' ? "lg:leading-11 leading-[26px]":
        leading == '12' ? "lg:leading-12 leading-[26px]":
        leading == '13' ? "leading-13":
        leading == '14' ? "leading-14":
        leading == '15' ? "lg:leading-15 leading-[40px]":
        "leading-16"} 
    `}
      >
        {props.children}
      </StyledHeading>
    </>
  );
};

export default function Heading({ priority,leading, color, children }) {
  return (
    <>
      <HeadingStyle priority={priority} color={color} leading={leading}>
        {children}
      </HeadingStyle>
    </>
  );
}
