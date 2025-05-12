import { ReactNode } from "react";

interface IContainerCard {
  children: ReactNode;
  title: string;
}

export const ContainerCard = (containerCardProps: IContainerCard) => {
  return (
    <div className="bg-white flex flex-col py-4 px-6 w-full rounded-md">
      <h4 className="font-bold text-lg mb-8">{containerCardProps.title}</h4>
      {containerCardProps.children}
    </div>
  );
};

export default ContainerCard;
