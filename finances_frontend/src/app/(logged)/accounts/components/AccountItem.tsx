export interface IAccountItem {
  name: string;
  value: string;
  icon: React.ReactNode;
  onOpen?: () => void;
}

// Item component for displaying account information
export const AccountItem = (accountItemProps: IAccountItem) => {
  return (
    <div
      onClick={() =>
        accountItemProps.onOpen ? accountItemProps.onOpen() : null
      }
      className="flex justify-between items-center w-full rounded-xl hover:bg-white hover:p-4 cursor-pointer"
    >
      <div className="flex gap-4 items-center">
        {accountItemProps.icon}
        <p className="font-bold text-black">{accountItemProps.name}</p>
      </div>
      <p className="font-bold">{accountItemProps.value}</p>
    </div>
  );
};
