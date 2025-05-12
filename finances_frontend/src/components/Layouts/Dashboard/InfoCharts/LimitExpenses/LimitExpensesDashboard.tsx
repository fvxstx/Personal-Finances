import ContainerCard from "@/components/Default/ContainerCard";
import { LimitChartDashboard } from "./LimitChartDashboard";

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

interface ILimitItem {
  title: string;
  limit: number;
  goal: number;
  spent: number;
  percentage: number;
}

const LimitItemDashboard = (limitItemProps: ILimitItem) => {
  return (
    <div className="flex justify-between items-center w-full border-b pb-4">
      <div className="flex justify-start items-center gap-4 w-full">
        {/*  Max Limit 360 */}
        <LimitChartDashboard limit={limitItemProps.limit} />
        <div>
          <p className="font-semibold">{limitItemProps.title}</p>
          <p>Meta: R$ {limitItemProps.goal}</p>
          <p>Gasto: R$ {limitItemProps.spent}</p>
        </div>
      </div>
      <span className="font-bold">{limitItemProps.percentage}%</span>
    </div>
  );
};
