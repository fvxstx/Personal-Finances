import Link from "next/link";
import { JSX } from "react";

interface IOptionsProp {
  icon: JSX.Element;
  text: string;
  href: string;
}

const OptionsComp = (optionsProps: IOptionsProp) => {
  return (
    <li className="flex gap-2 items-center hover:bg-background3 hover:p-1 rounded-2xl">
      {optionsProps.icon}
      <Link href={optionsProps.href}>{optionsProps.text}</Link>
    </li>
  );
};

export default OptionsComp;
