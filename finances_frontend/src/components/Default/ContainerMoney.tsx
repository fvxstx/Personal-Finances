interface IContainerMoney {
  title: string;
  value?: string;
  icon: React.ReactNode;
}

// Component for displaying the balance account
export const ContainerMoney = (containerMoneyProps: IContainerMoney) => {
  return (
    <div className="bg-background3 p-4 flex justify-between items-center rounded-xl w-full shadow-md">
      <div className="flex flex-col gap-4">
        <p>{containerMoneyProps.title}</p>
        <p className="text-2xl font-bold">{containerMoneyProps.value}</p>
      </div>
      {containerMoneyProps.icon}
    </div>
  );
};
