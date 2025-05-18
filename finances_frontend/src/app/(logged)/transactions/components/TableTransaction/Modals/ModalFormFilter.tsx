import { Datepicker } from "@/components/ui/datepicker";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuFilter } from "react-icons/lu";

export const ModalFormFilter = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="bg-principal text-white rounded-full p-2 cursor-pointer">
          <LuFilter size={22} className="h-full" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b pb-6">
          <SheetTitle className="text-2xl font-semibold">
            Filtros das Transações
          </SheetTitle>
        </SheetHeader>
        <form className="flex flex-col gap-6 mt-4 px-6">
          <div className="flex justify-between items-center gap-2">
            <div className="flex flex-col gap-2">
              <label>From</label>
              <Datepicker datePickerLabel="fullDate" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Until</label>
              <Datepicker datePickerLabel="fullDate" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Catégorias</label>
            <select className="rounded-2xl border p-2 shadow-sm">
              <option value="all">Todas</option>
              <option value="food">Alimentação</option>
              <option value="transport">Transporte</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label>Contas</label>
            <select className="rounded-2xl border p-2 shadow-sm">
              <option value="all">Todas</option>
              <option value="food">Conta principal</option>
              <option value="transport">Reserva financeira</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label>Tipos</label>
            <select className="rounded-2xl border p-2 shadow-sm">
              <option value="all">Todos</option>
              <option value="food">Receita</option>
              <option value="transport">Despesa</option>
              <option value="transport">Transferencia</option>
            </select>
          </div>
        </form>

        <SheetFooter className="flex flex-row justify-between w-full">
          <SheetClose asChild>
            <button className="text-principal font-bold w-fit">Cancel</button>
          </SheetClose>
          <SheetClose asChild>
            <button
              type="submit"
              className="bg-principal text-white py-2 px-4 rounded-4xl w-fit"
            >
              Aplicar Filtro
            </button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
