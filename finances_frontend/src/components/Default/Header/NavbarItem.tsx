import Link from "next/link";

export interface INavbarItem {
  href: string;
  text: string;
  pathName?: string;
}

// Item component for the navBar
export const NavbarItem = (navBarItemProps: INavbarItem) => {
  return (
    <li
      className={`font-medium ${
        navBarItemProps.pathName === navBarItemProps.href
          ? "border-foreground2 border-t-[3px]"
          : ""
      }`}
    >
      <Link
        href={navBarItemProps.href}
        className={`${
          navBarItemProps.pathName === navBarItemProps.href ? "font-bold" : ""
        }`}
      >
        {navBarItemProps.text}
      </Link>
    </li>
  );
};
