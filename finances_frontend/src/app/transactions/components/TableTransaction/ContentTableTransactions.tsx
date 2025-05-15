"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { LuPiggyBank } from "react-icons/lu";
import { TableCellAccount } from "./TableCellAccount";
import { useState } from "react";
import { ModalTransactionInfos } from "./Modals/ModalTransactionInfos";
import { IoPizzaOutline } from "react-icons/io5";
import { ModalIndividualTransaction } from "@/components/Default/ModalIndividualTransaction";

const TableMock = [
  {
    id: 1,
    description: "Pizza",
    iconDescription: (
      <IoPizzaOutline className="w-8 h-fit p-1 text-white bg-green-400 rounded-full" />
    ),
    date: "15/10/2025",
    account: "Wallet",
    iconAccount: (
      <LuPiggyBank className="w-8 h-fit p-2 text-white bg-blue-400 rounded-full" />
    ),
    value: 125.0,
    transactionType: "Expense",
    isApproved: false,
  },
  {
    id: 2,
    description: "Pizza",
    iconDescription: (
      <IoPizzaOutline className="w-8 h-fit p-1 text-white bg-green-400 rounded-full" />
    ),
    date: "15/10/2025",
    account: "Wallet",
    iconAccount: (
      <LuPiggyBank className="w-8 h-fit p-2 text-white bg-blue-400 rounded-full" />
    ),
    value: 75.0,
    transactionType: "Incomes",
    isApproved: true,
  },
  {
    id: 3,
    description: "Pizza",
    iconDescription: (
      <IoPizzaOutline className="w-8 h-fit p-1 text-white bg-green-400 rounded-full" />
    ),
    date: "15/10/2025",
    account: "Wallet",
    iconAccount: (
      <LuPiggyBank className="w-8 h-fit p-2 text-white bg-blue-400 rounded-full" />
    ),
    value: 75.0,
    transactionType: "Transfer",
    isApproved: true,
  },
  {
    id: 4,
    description: "Pizza",
    iconDescription: (
      <IoPizzaOutline className="w-8 h-fit p-1 text-white bg-green-400 rounded-full" />
    ),
    date: "15/10/2025",
    account: "Wallet",
    iconAccount: (
      <LuPiggyBank className="w-8 h-fit p-2 text-white bg-blue-400 rounded-full" />
    ),
    value: 75.0,
    transactionType: "Transfer",
    isApproved: false,
  },
  {
    id: 5,
    description: "Pizza",
    iconDescription: (
      <IoPizzaOutline className="w-8 h-fit p-1 text-white bg-green-400 rounded-full" />
    ),
    date: "15/10/2025",
    account: "Wallet",
    iconAccount: (
      <LuPiggyBank className="w-8 h-fit p-2 text-white bg-blue-400 rounded-full" />
    ),
    value: 75.0,
    transactionType: "Expense",
    isApproved: true,
  },
];

const ContentTableTransactions = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      <Table className="mt-10">
        <TableHeader className="bg-background3">
          <TableRow>
            <TableHead className="font-semibold">Descrição</TableHead>
            <TableHead className="font-semibold">Data</TableHead>
            <TableHead className="font-semibold">Conta</TableHead>
            <TableHead className="font-semibold">Valor</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TableMock.map((item) => (
            <TableRow
              key={item.id}
              onClick={() => setOpen(true)}
              className="cursor-pointer"
            >
              <TableCell className="flex items-center gap-2 py-4 font-bold">
                {item.iconDescription} {item.description}
              </TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCellAccount
                isTransfer={item.transactionType == "Transfer"}
                iconAccountFrom={item.iconAccount}
                nameAccountFrom={item.account}
                iconAccountTo={item.iconAccount}
                nameAccountTo={item.account}
              />
              <TableCell
                className={`font-bold ${
                  item.transactionType == "Transfer"
                    ? "text-black"
                    : item.transactionType == "Expense"
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                R$ {item.value}
              </TableCell>
              <TableCell>
                {item.isApproved ? (
                  <FaThumbsUp className="text-green-600 w-5 h-fit" />
                ) : (
                  <FaThumbsDown className="text-red-500 w-5 h-fit" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modais */}
      <ModalTransactionInfos
        onOpenChange={setOpen}
        open={open}
        openEdit={() => {
          setOpenEdit(true);
          setOpen(false);
        }}
      />
      <ModalIndividualTransaction
        openModal={openEdit}
        setOpenModal={() => setOpenEdit(!openEdit)}
        typeTransaction="income"
        isEditTransaction
      />
    </>
  );
};

export default ContentTableTransactions;
