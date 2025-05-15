import { TableCell } from "@/components/ui/table";
import { JSX } from "react";
import { TbArrowBigRightLines } from "react-icons/tb";

export interface ITableCellAccount {
  isTransfer: boolean;
  iconAccountFrom: JSX.Element;
  nameAccountFrom?: string;
  iconAccountTo?: JSX.Element;
  nameAccountTo?: string;
}

export const TableCellAccount = (tableCellProps: ITableCellAccount) => {
  return tableCellProps.isTransfer ? (
    <TableCell className="flex items-center">
      {tableCellProps.iconAccountFrom}{" "}
      <TbArrowBigRightLines className="w-8 h-fit p-2 rounded-full" />{" "}
      {tableCellProps.iconAccountTo}
    </TableCell>
  ) : (
    <TableCell className="flex items-center gap-2">
      {tableCellProps.iconAccountFrom} {tableCellProps.nameAccountFrom}
    </TableCell>
  );
};
