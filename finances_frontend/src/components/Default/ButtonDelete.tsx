import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";

export interface IButtonDelete {
  title: string;
  trashCanIcon?: boolean;
}

export const ButtonDelete = (buttonDeleteProps: IButtonDelete) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {buttonDeleteProps.trashCanIcon ? (
          <button className="bg-background3 text-white w-fit h-full p-2 rounded-full cursor-pointer">
            <FaTrashAlt className=" w-4 h-full" />
          </button>
        ) : (
          <Button
            type="button"
            className="cursor-pointer bg-red-500 text-white"
          >
            Deletar
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-center font-bold text-2xl">
          Excluir {buttonDeleteProps.title}
        </DialogTitle>
        <DialogDescription className="text-center font-semibold">
          Você tem certeza que deseja excluir essa{" "}
          {buttonDeleteProps.title.toLowerCase()}? Essa ação não pode ser
          desfeita.
        </DialogDescription>
        <div className="flex items-center justify-center gap-4 mt-4">
          <DialogClose asChild>
            <button className="bg-red-600 text-white w-fit h-full p-2 rounded-full cursor-pointer">
              Excluir
            </button>
          </DialogClose>
          <DialogClose asChild>
            <button className="bg-principal text-white w-fit h-full p-2 rounded-full cursor-pointer">
              Cancelar
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
