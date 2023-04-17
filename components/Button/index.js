import Link from "next/link";
const Button = ({ variant, size, ...props }) => {
  return (
     
    <div
      className={` ${
        variant == "tertiary"
          ? "border  border-tertiary bg-tertiary text-white text-center font-bold hover:bg-tertiary-100"
          : variant == "secondary"
          ? "border  border-secondary bg-secondary text-white text-center font-bold hover:bg-secondary-100"
          : variant == "primary"
          ? "border  border-primary bg-primary text-white text-center hover:bg-primary-100"
          : "bg-primary text-white"
      } ${
        size == "sm"
          ? "py-1 px-4 text-sm rounded-sm"
          : size == "md"
          ? "px-8 py-2 text-xl rounded-md"
          : size == "lg"
          ? "lg:px-10 px-7 lg:py-5 py-4 lg:text-lg text-[16px] rounded-lg"
          : size == "xl"
          ? "lg:px-14 px-3 lg:pt-4 lg:pb-5 lg:py-0 py-0.5 lg:text-3xl text-[14px] rounded-xl"
          : "py-2 px-4 text-xl rounded-xl"
      }
      `}
    >
      {props.children}
    </div>
     
  );
};
function ButtonComponent({ variant, size, href, children }) {
  return href ? (
    <Link href={`${href}`}>
      <button>
        <Button variant={variant} size={size}>
          {children}
        </Button>
      </button>
    </Link>
  ) : (
    <button>
      <Button variant={variant} size={size}>
        {children}
      </Button>
    </button>
  );
}
export default ButtonComponent;


