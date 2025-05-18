"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const ButtonLogin = () => {
  const navigate = useRouter();

  return (
    <Button
      type="button"
      onClick={() => navigate.push("dashboard")}
      className="flex w-full justify-center rounded-md border border-transparent bg-[#3088EE] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#E0F3FF] focus:outline-none focus:ring-2 hover:text-[#050506] focus:ring-[#E0F3FF] focus:ring-offset-2"
    >
      Entrar
    </Button>
  );
};
