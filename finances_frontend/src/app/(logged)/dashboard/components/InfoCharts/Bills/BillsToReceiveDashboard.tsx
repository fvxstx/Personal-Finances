import ContainerCard from "@/components/Default/ContainerCard";
import { BiCubeAlt } from "react-icons/bi";
import { BillsItemDashboard, IBillsItem } from "./BillsItemDashboard";

const BillItemModel: IBillsItem[] = [
  {
    title: "Ifood Assinatura",
    date: "10/05/2025",
    value: "R$ 12,90",
    icon: <BiCubeAlt className="bg-gray-300 w-10 h-auto rounded-full p-2" />,
    isLate: false,
  },
  {
    title: "Netflix Assinatura",
    date: "15/05/2025",
    value: "R$ 39,90",
    icon: <BiCubeAlt className="bg-gray-300 w-10 h-auto rounded-full p-2" />,
    isLate: false,
  },
  {
    title: "Spotify Assinatura",
    date: "20/05/2025",
    value: "R$ 19,90",
    icon: <BiCubeAlt className="bg-gray-300 w-10 h-auto rounded-full p-2" />,
    isLate: false,
  },
  {
    title: "Amazon Prime Assinatura",
    date: "25/05/2025",
    value: "R$ 14,90",
    icon: <BiCubeAlt className="bg-gray-300 w-10 h-auto rounded-full p-2" />,
    isLate: false,
  },
];

// BillsToReceiveDashboard component, show the bills to receive in the dashboard
const BillsToReceiveDashboard = () => {
  return (
    <ContainerCard title={"Contas a receber"}>
      <div className="flex flex-col items-center w-full gap-4">
        {BillItemModel.map((billItem, index) => (
          <BillsItemDashboard
            key={index}
            title={billItem.title}
            date={billItem.date}
            value={billItem.value}
            icon={billItem.icon}
            isLate={billItem.isLate}
          />
        ))}
      </div>
    </ContainerCard>
  );
};

export default BillsToReceiveDashboard;
