import { ButtonDelete } from "@/components/Default/ButtonDelete";
import { ModalCategoryIndividual } from "@/components/Default/Modals/ModalCategoryIndividual";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { BiPencil } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

export interface ITableCategoriesRow {
  name: string;
  icon: string;
  color: string;
  actions: string;
}

export const TableCategoriesRow = (
  tableCategoryRowProps: ITableCategoriesRow
) => {
  return (
    <TableRow className="text-lg">
      <TableCell className="py-5">{tableCategoryRowProps.name}</TableCell>
      <TableCell className="py-5">{tableCategoryRowProps.icon}</TableCell>
      <TableCell className="py-5">{tableCategoryRowProps.color}</TableCell>
      <TableCell className="cursor-pointer py-5 flex items-center">
        <Dialog>
          <DialogTrigger asChild>
            <BiPencil className="w-10 h-full mr-4 hover:bg-background2 p-2 rounded-full" />
          </DialogTrigger>
          <ModalCategoryIndividual isEdit />
        </Dialog>
        <ButtonDelete title="Categoria">
          <button>
            <FaRegTrashAlt className="w-9 h-full hover:bg-background2 p-2 hover:rounded-full" />
          </button>
        </ButtonDelete>
      </TableCell>
    </TableRow>
  );
};
