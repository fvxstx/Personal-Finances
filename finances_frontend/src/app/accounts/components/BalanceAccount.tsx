import { FaMoneyBill1Wave } from "react-icons/fa6";

// Component for displaying the balance account
export const BalanceAccount = () => {
  return (
    <div className="bg-background3 p-4 flex justify-between items-center rounded-lg  w-1/2">
      <div className="flex flex-col gap-4">
        <p>Balancete</p>
        <p className="text-2xl font-bold">R$ 7.123,73</p>
      </div>
      <FaMoneyBill1Wave className="w-14 h-full p-2 bg-principal rounded-full text-white" />
    </div>
  );
};
