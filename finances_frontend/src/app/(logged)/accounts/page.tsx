import Title from "@/components/Default/Title";
import { AccountsItems } from "./components/AccountsItems";
import NewAccountButton from "./components/NewAccountButton";
import { ContainerMoney } from "@/components/Default/ContainerMoney";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import AccountService from "@/services/AccountService";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";

export default async function AccountsPage() {
  const session = await getServerSession(authOptions);

  const accounts = await AccountService.GetAll(session!.user.sub);
  const totalBalance = accounts
    ?.filter((x) => x.account.balanceStatus == 1)
    ?.reduce((acc, currentValue) => {
      return acc + currentValue.account.total_Balance;
    }, 0)
    .toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <main className="flex flex-col items-start w-full py-4 px-32 mt-10 gap-14">
      <div className="flex justify-between w-full items-center">
        <Title name="Contas" />
        <NewAccountButton />
      </div>
      <div className="flex justify-between w-full items-start gap-10">
        <AccountsItems accountData={accounts} />
        <div className="w-1/2">
          <ContainerMoney
            title="Balancete"
            value={totalBalance}
            icon={
              <FaMoneyBill1Wave className="w-14 h-full p-2 bg-principal rounded-full text-white" />
            }
          />
        </div>
      </div>
    </main>
  );
}
