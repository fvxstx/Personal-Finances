export interface ICardDashboard {
  title: string;
  value: string;
  icon: React.ReactNode;
  onClickCard?: () => void;
}

// Item component for the dashboard cards
export const CardItemDashboard = (cardProps: ICardDashboard) => {
  return (
    <div
      onClick={cardProps.onClickCard}
      className="bg-white rounded-3xl shadow-md flex justify-between items-center pl-2 pr-4 w-full cursor-pointer hover:text-foreground2 hover:bg-principal"
    >
      <div className="flex flex-col justify-start items-start p-4 gap-3">
        <h4>{cardProps.title}</h4>
        <p className="font-bold text-2xl">{cardProps.value}</p>
      </div>
      {cardProps.icon}
    </div>
  );
};
