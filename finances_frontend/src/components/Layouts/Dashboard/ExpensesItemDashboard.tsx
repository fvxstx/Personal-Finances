import { JSX } from "react";

export interface IExpensesItem {
  icon: JSX.Element;
  title: string;
  value: string;
}

export const ExpensesItemDashboard = (expensesItemProps: IExpensesItem) => {
  return (
    <div className="flex items-center gap-3">
      {expensesItemProps.icon}
      <p className="font-bold">{expensesItemProps.title}</p>
      <p className="font-bold">{expensesItemProps.value}</p>
    </div>
  );
};
