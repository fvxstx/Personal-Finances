"use client";

import { Popover, PopoverContent } from "@/components/ui/popover";
import { ItransactionType } from "@/types/ITransaction";
import { useState } from "react";
import { FaExchangeAlt, FaMinus, FaPlus } from "react-icons/fa";
import { ButtonTriggerTypeTransaction } from "./ButtonTriggerTypeTransaction";
import { ModalIndividualTransaction } from "@/components/Default/ModalIndividualTransaction";

export const ButtonPopoverNewTransaction = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [transactionType, setTransactionType] =
    useState<ItransactionType>("income");

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <ButtonTriggerTypeTransaction
          mouseEnter={() => setOpen(true)}
          mouseLeave={() => setOpen(false)}
          openModal={() => setOpenModal(true)}
          transactionType={transactionType}
        />
        <PopoverContent
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="flex flex-col gap-2 py-4 px-0 rounded-xl shadow-md bg-background"
        >
          <button
            onMouseEnter={() => setTransactionType("income")}
            onClick={() => {
              setOpenModal(true);
              setOpen(false);
            }}
            className="cursor-pointer flex items-center text-lg text-green-600 font-semibold gap-2 px-4 py-2 hover:bg-white"
          >
            Nova receita{" "}
            <FaPlus className="rounded-full border-[2px] border-green-600 p-1 h-fit w-6" />
          </button>
          <button
            onMouseEnter={() => setTransactionType("expense")}
            onClick={() => {
              setOpenModal(true);
              setOpen(false);
            }}
            className="cursor-pointer flex items-center text-lg text-red-600 font-semibold gap-2 px-4 py-2 hover:bg-white"
          >
            Nova despesa{" "}
            <FaMinus className="rounded-full border-[2px] border-red-600 p-1 h-fit w-6" />
          </button>
          <button
            onMouseEnter={() => setTransactionType("transfer")}
            onClick={() => {
              setOpenModal(true);
              setOpen(false);
            }}
            className="cursor-pointer flex items-center text-lg text-principal font-semibold gap-2 px-4 py-2 hover:bg-white"
          >
            Nova Transferencia{" "}
            <FaExchangeAlt className="rounded-full border-[2px] border-principal p-1 h-fit w-6" />
          </button>
        </PopoverContent>
      </Popover>
      {/* Modal */}

      <ModalIndividualTransaction
        typeTransaction={transactionType}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};
