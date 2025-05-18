import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiPalette } from "react-icons/ci";
import { BiSolidBank } from "react-icons/bi";
import { MdDescription } from "react-icons/md";
import { Switch } from "@/components/ui/switch";
import { Datepicker } from "@/components/ui/datepicker";
import { ItransactionType } from "@/types/ITransaction";

export interface IModalIndividualTransaction {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  typeTransaction: ItransactionType;
  isEditTransaction?: boolean;
}

export const ModalIndividualTransaction = (
  individualTransactionProps: IModalIndividualTransaction
) => {
  const label =
    individualTransactionProps.typeTransaction == "income"
      ? "Receita"
      : individualTransactionProps.typeTransaction == "expense"
      ? "Despesa"
      : "Transferencia";

  const colorInputValue =
    individualTransactionProps.typeTransaction == "income"
      ? "border-green-600 text-green-600"
      : individualTransactionProps.typeTransaction == "expense"
      ? "border-red-600 text-red-600"
      : "";

  return (
    <Dialog
      open={individualTransactionProps.openModal}
      onOpenChange={individualTransactionProps.setOpenModal}
    >
      <DialogContent>
        <DialogTitle className={`font-bold text-2xl ${colorInputValue}`}>
          {individualTransactionProps.isEditTransaction ? "Editar" : "Nova"}{" "}
          {label}
        </DialogTitle>
        <div className="grid gap-6 py-4">
          <div className="flex flex-col gap-2 items-start">
            <label className="text-right">Valor Inicial</label>
            <div className="flex gap-2 w-full items-center">
              <p className={`${colorInputValue} font-bold`}>R$</p>
              <input
                className={`w-full border-b ${colorInputValue}`}
                type="number"
                step="0.01"
              />
            </div>
          </div>
          {individualTransactionProps.typeTransaction === "transfer" && (
            <div className="flex flex-col gap-2 items-start">
              <label className="text-right">Conta de saída</label>
              <div className="flex gap-2 w-full items-center">
                <BiSolidBank size={24} />
                <select className="w-full border-b">
                  <option value="">Nubank</option>
                  <option value="">Mercado pago</option>
                </select>
              </div>
            </div>
          )}
          {individualTransactionProps.typeTransaction !== "transfer" && (
            <div className="flex flex-col gap-2 items-start">
              <label className="text-right">Descrição</label>
              <div className="flex gap-2 w-full items-center">
                <MdDescription size={24} />
                <input className="w-full border-b" />
              </div>
            </div>
          )}
          <div className="flex flex-col gap-2 items-start">
            <label className="text-right">
              {individualTransactionProps.typeTransaction !== "transfer"
                ? "Instituição Bancaria"
                : "Conta de entrada"}
            </label>
            <div className="flex gap-2 w-full items-center">
              <BiSolidBank size={24} />
              <select className="w-full border-b">
                <option value="">Nubank</option>
                <option value="">Mercado pago</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between gap-4 items-center">
            {individualTransactionProps.typeTransaction !== "transfer" && (
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="text-right">Categoria</label>
                <div className="flex gap-2 w-full items-center">
                  <CiPalette size={24} />
                  <select className="w-full border-b">
                    <option value="">Casa</option>
                    <option value="">Mercado</option>
                  </select>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-right">Data</label>
              <div className="flex gap-2 w-full items-center">
                <CiPalette size={24} />
                <Datepicker
                  datePickerLabel="fullDate"
                  className="text-sm border-none border-b"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start mt-4">
            <div className="flex gap-2 w-full items-center">
              <IoIosInformationCircleOutline size={24} />
              <label>Pago?</label>
              <Switch />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-4">
          <button className="w-full text-principal hover:bg-principal hover:text-white font-semibold py-2 rounded-lg mt-4 cursor-pointer">
            {individualTransactionProps.isEditTransaction ? "Salvar" : "Criar"}{" "}
            e adicionar outro
          </button>
          <button
            onClick={() => individualTransactionProps.setOpenModal(false)}
            className="w-full bg-principal text-white hover:text-principal hover:bg-transparent hover:border hover:border-principal font-semibold py-2 rounded-lg mt-4 cursor-pointer"
          >
            {individualTransactionProps.isEditTransaction ? "Salvar" : "Criar"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
