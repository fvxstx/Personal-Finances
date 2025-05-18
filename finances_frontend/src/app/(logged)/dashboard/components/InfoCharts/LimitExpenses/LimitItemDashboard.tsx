import { LimitChartDashboard } from "./LimitChartDashboard";

export interface ILimitItem {
  title: string;
  limit: number;
  goal: number;
  spent: number;
  percentage: number;
}

// Item component for the dashboard limit expenses
export const LimitItemDashboard = (limitItemProps: ILimitItem) => {
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
