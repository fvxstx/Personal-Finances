export interface IBillsItem {
  title: string;
  date: string;
  value: string;
  icon: React.ReactNode;
  isLate: boolean;
}

// Item component for the dashboard bills
export const BillsItemDashboard = (billsItemProps: IBillsItem) => {
  return (
    <div className="flex justify-between items-start w-full border-b pb-2 ">
      <div className="flex gap-3 items-center">
        {billsItemProps.icon}
        <div className="flex flex-col">
          <p>{billsItemProps.title}</p>
          <p>{billsItemProps.date}</p>
        </div>
      </div>
      <p
        className={`font-bold ${billsItemProps.isLate ? "text-red-500" : ""} `}
      >
        {billsItemProps.value}
      </p>
    </div>
  );
};
