import { ButtonDelete } from "@/components/Default/ButtonDelete";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { FaPen, FaThumbsUp } from "react-icons/fa";
import { IoPizzaOutline } from "react-icons/io5";

export interface ITransactionInfos {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  openEdit: () => void;
}

export const ModalTransactionInfos = (
  transactionInfosProps: ITransactionInfos
) => {
  return (
    <Drawer
      open={transactionInfosProps.open}
      onOpenChange={transactionInfosProps.onOpenChange}
    >
      <DrawerContent>
        <div className="flex items-start justify-center gap-2">
          <div className="flex flex-col items-center justify-center gap-1 pr-14 mb-4 border-r-2 ">
            <IoPizzaOutline className="w-14 h-fit p-1 text-white bg-green-400 rounded-full" />
            <DrawerTitle className="font-bold text-xl">Pizza</DrawerTitle>
            <p className="font-bold text-lg text-green-600">R$ 75,00</p>
            <div className="flex items-center justify-between gap-3 mt-4">
              <button className="bg-green-600 text-white w-fit h-full p-2 rounded-full cursor-pointer">
                <FaThumbsUp className=" w-4 h-full" />
              </button>
              <button
                onClick={transactionInfosProps.openEdit}
                className="bg-background3 text-white w-fit h-full p-2 rounded-full cursor-pointer"
              >
                <FaPen className=" w-4 h-full" />
              </button>
              <ButtonDelete title="Transação" trashCanIcon />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 ml-10">
            <div className="flex flex-col items-start gap-1">
              <p className="font-semibold text-sm">Categoria</p>
              <p className="text-black text-sm font-semibold">Transporte</p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="font-semibold text-sm">Conta</p>
              <p className="text-black text-sm font-semibold">Wallet</p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="font-semibold text-sm">Data</p>
              <p className="text-black text-sm font-semibold">02/05/2022</p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="font-semibold text-sm ">Obersavações</p>
              <p className="text-black text-sm font-semibold">--</p>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
