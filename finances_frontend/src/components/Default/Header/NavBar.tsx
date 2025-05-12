"use client";

import { usePathname } from "next/navigation";
import { INavbarItem, NavbarItem } from "./NavbarItem";

const NavbarItemsModel: INavbarItem[] = [
  {
    href: "/",
    text: "Dashboard",
  },
  {
    href: "/transactions",
    text: "Transações",
  },
  {
    href: "/reports",
    text: "Relatórios",
  },
  {
    href: "/credit-card",
    text: "Cartão de Crédito",
  },
  {
    href: "/goals",
    text: "Metas",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-4 justify-center items-center">
        {NavbarItemsModel.map((item, index) => (
          <NavbarItem
            key={index}
            href={item.href}
            text={item.text}
            pathName={pathname}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
