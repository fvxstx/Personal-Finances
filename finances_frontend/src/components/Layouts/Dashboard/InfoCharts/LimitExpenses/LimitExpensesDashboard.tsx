import ContainerCard from "@/components/Default/ContainerCard";
import { LimitItemDashboard } from "./LimitItemDashboard";

const limitExpensesData = [
  {
    title: "Alimentação",
    limit: 240,
    goal: 1000,
    spent: 170.8,
    percentage: 17,
  },
  {
    title: "Transporte",
    limit: 360,
    goal: 1000,
    spent: 170.8,
    percentage: 17,
  },
  {
    title: "Saúde",
    limit: 20,
    goal: 1000,
    spent: 170.8,
    percentage: 17,
  },
  {
    title: "Educação",
    limit: 10,
    goal: 1000,
    spent: 170.8,
    percentage: 17,
  },
];

// LimitExpensesDashboard component, show the limit expenses in the dashboard
const LimitExpensesDashboard = () => {
  return (
    <ContainerCard title="Limite de Gastos do Mês">
      <div className="flex flex-col gap-3 justify-center items-center w-full">
        {limitExpensesData.map((item, index) => (
          <LimitItemDashboard
            key={index}
            title={item.title}
            limit={item.limit}
            goal={item.goal}
            spent={item.spent}
            percentage={item.percentage}
          />
        ))}
      </div>
    </ContainerCard>
  );
};

export default LimitExpensesDashboard;
