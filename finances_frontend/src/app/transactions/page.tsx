import HeaderDef from "@/components/Default/Header/Header";
import Title from "@/components/Default/Title";
import { TableTransactions } from "./components/TableTransactions";
import { ContainersGridMoney } from "./components/ContainersGridMoney";

export default async function TransactionPage() {
  return (
    <div className="w-dvw h-dvh flex flex-col items-center ">
      <HeaderDef />
      <main className="flex flex-col items-start w-full py-4 px-32 mt-10 gap-14">
        <div className="flex justify-between w-full items-center">
          <Title name="Transações" />
        </div>
        <div className="flex justify-between w-full items-start gap-4">
          <TableTransactions />
          <ContainersGridMoney />
        </div>
      </main>
    </div>
  );
}
