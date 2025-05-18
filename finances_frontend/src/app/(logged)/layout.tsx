import HeaderDef from "@/components/Default/Header/Header";
import { ReactNode } from "react";

export default function LoggedLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="w-dvw h-dvh flex flex-col items-center ">
      <HeaderDef />
      {children}
    </div>
  );
}
