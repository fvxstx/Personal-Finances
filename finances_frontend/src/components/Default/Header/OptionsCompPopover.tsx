import { signOut } from "next-auth/react";
import Link from "next/link";
import { JSX } from "react";

interface IOptionsProp {
  icon: JSX.Element;
  text: string;
  href: string;
}

// Item component for the popover in the menu Header
const OptionsComp = (optionsProps: IOptionsProp) => {
  return (
    <li className="flex gap-2 items-center hover:bg-background3 hover:p-1 rounded-2xl">
      {optionsProps.icon}
      {optionsProps.href == "/logout" ? (
        <button className="cursor-pointer" onClick={() => signOut()}>
          {optionsProps.text}
        </button>
      ) : (
        <Link href={optionsProps.href}>{optionsProps.text}</Link>
      )}
    </li>
  );
};

export default OptionsComp;
