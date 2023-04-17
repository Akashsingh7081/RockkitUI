import Link from "next/link";
const ListItem = ({ children,color, href, size, linkType }) => {
  return (
    <Link href={href}
      className={`cursor-pointer hover:text-secondary font-bold p-2
    ${size == "sm" ? "text-sm" : size == "md" ? "text-md" : "text-xl"} 
    ${linkType === true ? "font-semibold text-gray-600 ": null} ${color}`}
    
    >
     {children}
    </Link>
  );
};

export default ListItem;

