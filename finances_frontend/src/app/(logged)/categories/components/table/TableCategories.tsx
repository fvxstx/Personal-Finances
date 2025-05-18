import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableCategoriesRow } from "./TableCategoriesRow";
import { ITableCategories } from "@/types/ICategory";

export const TableCategoriesExpensesMock = [
  {
    id: 1,
    name: "Alimentação",
    icon: "🍔",
    color: "#FF0000",
    actions: "Editar | Excluir",
  },
  {
    id: 2,
    name: "Transporte",
    icon: "🚗",
    color: "#00FF00",
    actions: "Editar | Excluir",
  },
  {
    id: 3,
    name: "Saúde",
    icon: "💊",
    color: "#0000FF",
    actions: "Editar | Excluir",
  },
];

export const TableCategoriesIncomesMock = [
  {
    id: 1,
    name: "Salário",
    icon: "💰",
    color: "#FF0000",
    actions: "Editar | Excluir",
  },
  {
    id: 2,
    name: "Investimentos",
    icon: "📈",
    color: "#00FF00",
    actions: "Editar | Excluir",
  },
  {
    id: 3,
    name: "Freelance",
    icon: "💼",
    color: "#0000FF",
    actions: "Editar | Excluir",
  },
];

export const TableCategories = (tableCategoriesProps: ITableCategories) => {
  return (
    <Table className="mt-10">
      <TableHeader className="bg-background3 rounded-2xl">
        <TableRow>
          <TableHead className="font-bold text-lg">Nome</TableHead>
          <TableHead className="font-bold text-lg">Icone</TableHead>
          <TableHead className="font-bold text-lg">Cor</TableHead>
          <TableHead className="font-bold text-lg">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableCategoriesProps.typeCategory === "expenses"
          ? TableCategoriesExpensesMock.map((expenses) => {
              return (
                <TableCategoriesRow
                  key={expenses.id}
                  name={expenses.name}
                  icon={expenses.icon}
                  color={expenses.color}
                  actions={expenses.actions}
                />
              );
            })
          : TableCategoriesIncomesMock.map((expenses) => {
              return (
                <TableCategoriesRow
                  key={expenses.id}
                  name={expenses.name}
                  icon={expenses.icon}
                  color={expenses.color}
                  actions={expenses.actions}
                />
              );
            })}
      </TableBody>
    </Table>
  );
};
