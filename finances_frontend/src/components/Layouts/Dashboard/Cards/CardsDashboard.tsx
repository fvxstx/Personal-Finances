"use client";
import { CiCreditCard1 } from "react-icons/ci";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { HiMinus, HiPlus } from "react-icons/hi";
import { ICardDashboard, CardItemDashboard } from "./CardItemDashboard";
import { ModalIndividualTransaction } from "@/components/Default/ModalIndividualTransaction";
import { useState } from "react";
import { ItransactionType } from "@/types/ITransaction";
import { useRouter } from "next/navigation";

const CardDashboardModel: ICardDashboard[] = [
  {
    title: "Saldo em Conta",
    value: "R$ 923.73",
    icon: (
      <FaMoneyBill1Wave className="text-white bg-purple-500 p-2 rounded-full w-12 h-auto" />
    ),
  },
  {
    title: "Receita",
    value: "R$ 123.45",
    icon: (
      <HiPlus className="text-white bg-green-500 p-2 rounded-full w-12 h-auto" />
    ),
  },
  {
    title: "Despesas",
    value: "R$ 678.90",
    icon: (
      <HiMinus className="text-white bg-red-500 p-2 rounded-full w-12 h-auto" />
    ),
  },
  {
    title: "Cartão de Crédito",
    value: "R$ 678.90",
    icon: (
      <CiCreditCard1 className="text-white bg-green-900 p-2 rounded-full w-12 h-auto" />
    ),
  },
];

// CardsDashboard component, show the cards in the dashboard
const CardsDashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [typeTransaction, setTypeTransaction] =
    useState<ItransactionType>("income");
  const navigate = useRouter();

  const handleClickCard = (title: string) => {
    if (title === "Saldo em Conta") {
      navigate.push("/accounts");
    }
    if (title === "Receita") {
      setOpenModal(true);
      setTypeTransaction("income");
    }
    if (title === "Despesas") {
      setOpenModal(true);
      setTypeTransaction("expense");
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      {CardDashboardModel.map((card, index) => (
        <div key={index} className="w-full">
          <CardItemDashboard
            title={card.title}
            value={card.value}
            icon={card.icon}
            onClickCard={() => {
              handleClickCard(card.title);
            }}
          />
        </div>
      ))}
      <ModalIndividualTransaction
        openModal={openModal}
        setOpenModal={setOpenModal}
        typeTransaction={typeTransaction}
      />
    </div>
  );
};

export default CardsDashboard;
