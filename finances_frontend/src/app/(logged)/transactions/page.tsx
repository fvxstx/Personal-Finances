import Title from "@/components/Default/Title";
import { TableTransactions } from "./components/TableTransaction/TableTransactions";
import { ContainersGridMoney } from "./components/ContainersGridMoney";

export default async function TransactionPage() {
  return (
    <main className="flex flex-col items-start w-full py-4 px-32 mt-10 gap-14">
      <div className="flex justify-between w-full items-center">
        <Title name="Transações" />
      </div>
      <div className="flex justify-between w-full items-start gap-4">
        <TableTransactions />
        <ContainersGridMoney />
      </div>
    </main>
  );
}
