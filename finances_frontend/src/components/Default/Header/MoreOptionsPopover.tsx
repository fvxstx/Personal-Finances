"use client";
import { FaArrowDown, FaArrowUp, FaRegUserCircle } from "react-icons/fa";
import {
  PopoverTrigger,
  Popover,
  PopoverContent,
} from "@/components/ui/popover";
import { MdAccountBalance, MdCategory } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import OptionsComp from "./OptionsCompPopover";
import { useState } from "react";

const options = [
  {
    icon: <FaRegUserCircle />,
    text: "Meu Perfil",
    href: "/profile",
  },
  {
    icon: <MdAccountBalance />,
    text: "Contas",
    href: "/accounts",
  },
  {
    icon: <MdCategory />,
    text: "Categorias",
    href: "/categories",
  },
  {
    icon: <IoLogOutOutline />,
    text: "Sair",
    href: "/logout",
  },
];

// MoreOptionsPopover component, you can add a item to the options array to add a new item to the popover
const MoreOptionsPopover = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        {open ? (
          <FaArrowUp className="text-foreground2 cursor-pointer" />
        ) : (
          <FaArrowDown className="text-foreground2 cursor-pointer" />
        )}
      </PopoverTrigger>
      <PopoverContent className="relative right-20 top-2 shadow-2xl text-foreground w-48">
        <ul className="flex flex-col gap-4">
          {options.map((option, index) => (
            <OptionsComp
              key={index}
              icon={option.icon}
              text={option.text}
              href={option.href}
            />
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default MoreOptionsPopover;
