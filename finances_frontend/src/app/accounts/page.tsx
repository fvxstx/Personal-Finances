import HeaderDef from "@/components/Default/Header/Header";
import Title from "@/components/Default/Title";
import { AccountsItems } from "./components/AccountsItems";
import NewAccountButton from "./components/NewAccountButton";
import { ContainerMoney } from "@/components/Default/ContainerMoney";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export default async function AccountsPage() {
  return (
    <div className="w-dvw h-dvh flex flex-col items-center ">
      <HeaderDef />
      <main className="flex flex-col items-start w-full py-4 px-32 mt-10 gap-14">
        <div className="flex justify-between w-full items-center">
          <Title name="Contas" />
          <NewAccountButton />
        </div>
        <div className="flex justify-between w-full items-start gap-10">
          <AccountsItems />
          <div className="w-1/2">
            <ContainerMoney
              title="Balancete"
              value="7.123,73"
              icon={
                <FaMoneyBill1Wave className="w-14 h-full p-2 bg-principal rounded-full text-white" />
              }
            />
          </div>
        </div>
      </main>
    </div>
  );
}
