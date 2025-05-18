import ContentTableTransactions from "./ContentTableTransactions";
import { HeaderTableTransactions } from "./HeaderTableTransactions";

export const TableTransactions = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 w-full flex flex-col gap-4">
      <HeaderTableTransactions />
      <ContentTableTransactions />
    </div>
  );
};
