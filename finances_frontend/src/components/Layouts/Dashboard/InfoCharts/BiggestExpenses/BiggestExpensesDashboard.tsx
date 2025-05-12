import ContainerCard from "@/components/Default/ContainerCard";
import { BiSolidCookie } from "react-icons/bi";
import { ExpensesItemDashboard, IExpensesItem } from "./ExpensesItemDashboard";
import { ExpensesChartDashboard } from "./ExpensesChartDashboard";

const BiggestExpensesDashboardModel: IExpensesItem[] = [
  {
    icon: (
      <BiSolidCookie className="text-white bg-amber-500 p-2 rounded-full w-9 h-auto" />
    ),
    title: "Aquisição de Bens",
    value: "32,89%",
  },
  {
    icon: (
      <BiSolidCookie className="text-white bg-amber-500 p-2 rounded-full w-9 h-auto" />
    ),
    title: "Aquisição de Bens",
    value: "32,89%",
  },
  {
    icon: (
      <BiSolidCookie className="text-white bg-amber-500 p-2 rounded-full w-9 h-auto" />
    ),
    title: "Aquisição de Bens",
    value: "32,89%",
  },
  {
    icon: (
      <BiSolidCookie className="text-white bg-amber-500 p-2 rounded-full w-9 h-auto" />
    ),
    title: "Aquisição de Bens",
    value: "32,89%",
  },
  {
    icon: (
      <BiSolidCookie className="text-white bg-amber-500 p-2 rounded-full w-9 h-auto" />
    ),
    title: "Aquisição de Bens",
    value: "32,89%",
  },
  {
    icon: (
      <BiSolidCookie className="text-white bg-amber-500 p-2 rounded-full w-9 h-auto" />
    ),
    title: "Aquisição de Bens",
    value: "32,89%",
  },
];

// BiggestExpensesDashboard component, show the biggest expenses in the dashboard
const BiggestExpensesDashboard = () => {
  return (
    <ContainerCard title="Maiores Despesas do Mês">
      <div className="flex justify-between items-center w-full">
        {/* List of expenses */}
        <div className="flex flex-col items-start gap-3">
          {BiggestExpensesDashboardModel.slice(0, 5).map((item, index) => (
            <ExpensesItemDashboard
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>

        {/* Chart of expenses */}
        <ExpensesChartDashboard />
      </div>
    </ContainerCard>
  );
};

export default BiggestExpensesDashboard;
