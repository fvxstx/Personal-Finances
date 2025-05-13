import HeaderDef from "@/components/Default/Header/Header";
import Title from "@/components/Default/Title";
import { AccountsItems } from "./components/AccountsItems";
import { BalanceAccount } from "./components/BalanceAccount";
import NewAccountButton from "./components/NewAccountButton";

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
          <BalanceAccount />
        </div>
      </main>
    </div>
  );
}
