"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { FormEvent } from "react";

const FormLogin = () => {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      alert("Login failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-[#050506]">
      <div>
        <label className="block font-semibold ">
          Email <span className="text-red-500">*</span>
        </label>
        <div className="mt-1">
          <input
            required
            name="email"
            type="email"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#E0F3FF] focus:outline-none focus:ring-[#E0F3FF] sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block font-semibold ">
          Senha <span className="text-red-500">*</span>
        </label>
        <div className="mt-1 relative">
          <input
            required
            type="password"
            name="password"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#E0F3FF] focus:outline-none focus:ring-[#E0F3FF] sm:text-sm"
          />
        </div>
      </div>
      <div>
        <Button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-[#3088EE] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#E0F3FF] focus:outline-none focus:ring-2 hover:text-[#050506] focus:ring-[#E0F3FF] focus:ring-offset-2"
        >
          Entrar
        </Button>
      </div>
      <div>
        <a href="#" className="font-semibold text-[#3088EE]">
          Esqueci minha senha
        </a>
      </div>
    </form>
  );
};

export default FormLogin;
