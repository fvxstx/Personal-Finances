import { CiCreditCard1 } from "react-icons/ci";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { HiMinus, HiPlus } from "react-icons/hi";
import { ICardDashboard, CardItemDashboard } from "./CardItemDashboard";

const CardDashboardModel: ICardDashboard[] = [
  {
    title: "Saldo em Conta",
    value: "R$ 923.73",
    icon: (
      <FaMoneyBill1Wave className="text-white bg-purple-500 p-2 rounded-full w-12 h-auto" />
    ),
  },
  {
    title: "Receita",
    value: "R$ 123.45",
    icon: (
      <HiPlus className="text-white bg-green-500 p-2 rounded-full w-12 h-auto" />
    ),
  },
  {
    title: "Despesas",
    value: "R$ 678.90",
    icon: (
      <HiMinus className="text-white bg-red-500 p-2 rounded-full w-12 h-auto" />
    ),
  },
  {
    title: "Cartão de Crédito",
    value: "R$ 678.90",
    icon: (
      <CiCreditCard1 className="text-white bg-green-900 p-2 rounded-full w-12 h-auto" />
    ),
  },
];

const CardsDashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      {CardDashboardModel.map((card, index) => (
        <div key={index} className="w-full">
          <CardItemDashboard
            title={card.title}
            value={card.value}
            icon={card.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsDashboard;
