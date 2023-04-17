import React, { useState } from "react";
import Image from "next/image";
import ListItem from "@/elements/ListItem";
import Link from "next/link";
import { AiFillCaretDown,AiFillCaretUp } from "react-icons/ai";

const Dropdown = ({ children, data, isIcon, href, size }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div onClick={() => setToggle(!toggle)}>
      <div
        className={`font-bold text-black-100 flex items-center cursor-pointer ${
          size == "sm" ? "text-sm" : size == "md" ? "text-md" : "text-xl"
        }`}
      >
        {isIcon ? (
          <>
            <div className="pr-1">{children}</div>
            {toggle ? <AiFillCaretUp size="0.875em" color="#91979D"/>: <AiFillCaretDown size="0.875em" color="#91979D"/>}
          </>
        ) : (
          <Link href={href}>{children}</Link>
        )}
      </div>

      {toggle ? (
        <ul className="flex flex-col items-center absolute font-medium text-black-100 shadow-xl px-4 py-3 rounded-lg">
          {data
            ? data.map((item) => {
             
                return (
                  <ListItem key={index} href={item.href} size={size}>{item.text}</ListItem>
                );
              })
            : null}
        </ul>
      ) : null}
    </div>
  );
};
export default Dropdown;

