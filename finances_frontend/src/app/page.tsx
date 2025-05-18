import { ButtonLogin } from "@/components/Layout/Login/ButtonLogin";

import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex min-h-screen justify-center h-screen overflow-hidden">
      <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24 w-full lg:w-1/2">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <p className="mt-2 text-2xl text-[#1F4C85] font-bold">
              Fazer login
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form className="space-y-6 text-[#050506]">
                <div>
                  <label className="block font-semibold ">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#E0F3FF] focus:outline-none focus:ring-[#E0F3FF] sm:text-sm" />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block font-semibold ">
                    Senha <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type="password"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#E0F3FF] focus:outline-none focus:ring-[#E0F3FF] sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <ButtonLogin />
                </div>
                <div>
                  <a href="#" className="font-semibold text-[#3088EE]">
                    Esqueci minha senha
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hidden lg:flex flex-1 items-center justify-center bg-principal"
        suppressHydrationWarning
      >
        <h1>
          <Image
            src="/logo.png"
            alt="Banner"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </h1>
      </div>
    </div>
  );
}
