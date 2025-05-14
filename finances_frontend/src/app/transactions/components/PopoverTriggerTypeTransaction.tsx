import { PopoverTrigger } from "@/components/ui/popover";
import { ItransactionType } from "@/types/ITransaction";
import { FaExchangeAlt, FaMinus, FaPlus } from "react-icons/fa";

interface IPopoverTriggerTypeTransaction {
  transactionType: ItransactionType;
  mouseEnter: () => void;
  mouseLeave: () => void;
}

export const PopoverTriggerTypeTransaction = ({
  transactionType,
  mouseEnter,
  mouseLeave,
}: IPopoverTriggerTypeTransaction) => {
  return transactionType === "expense" ? (
    <PopoverTrigger asChild>
      <button
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className="cursor-pointer flex items-center text-xl text-red-600 font-bold gap-2"
      >
        Nova despesa{" "}
        <FaMinus className="rounded-full border-[3px] border-red-600 p-1 h-fit w-7" />
      </button>
    </PopoverTrigger>
  ) : transactionType === "income" ? (
    <PopoverTrigger asChild>
      <button
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className="cursor-pointer flex items-center text-xl text-green-600 font-bold gap-2"
      >
        Nova receita{" "}
        <FaPlus className="rounded-full border-[3px] border-green-600 p-1 h-fit w-7" />
      </button>
    </PopoverTrigger>
  ) : (
    <PopoverTrigger asChild>
      <button
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className="cursor-pointer flex items-center text-xl text-principal font-bold gap-2"
      >
        Nova Transferencia{" "}
        <FaExchangeAlt className="rounded-full border-[3px] border-principal p-1 h-fit w-7" />
      </button>
    </PopoverTrigger>
  );
};
