import { ContainerMoney } from "@/components/Default/ContainerMoney";
import { Minus, Plus } from "lucide-react";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export const ContainersGridMoney = () => {
  return (
    <div className="w-1/3 flex flex-col gap-4">
      <ContainerMoney
        title="Balancete"
        value="7.123,73"
        icon={
          <FaMoneyBill1Wave className="w-14 h-full p-2 bg-principal rounded-full text-white" />
        }
      />
      <ContainerMoney
        title="Entradas"
        value="4.000,00"
        icon={
          <Plus className="w-14 h-full p-2 bg-green-600 rounded-full text-white" />
        }
      />
      <ContainerMoney
        title="Saídas"
        value="4.000,00"
        icon={
          <Minus className="w-14 h-full p-2 bg-red-600 rounded-full text-white" />
        }
      />
    </div>
  );
};
