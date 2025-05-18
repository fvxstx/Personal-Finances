import { ButtonPopoverNewTransaction } from "./Buttons/ButtonPopoverNewTransaction";
import { ButtonsDateFilter } from "./Buttons/ButtonsDateFilter";
import { ContainerButtonsFilterAndSearch } from "./ContainerButtonsFilterAndSearch";

export const HeaderTableTransactions = () => {
  return (
    <div className="flex justify-between gap-2 w-full">
      <ButtonPopoverNewTransaction />
      <ButtonsDateFilter />
      <ContainerButtonsFilterAndSearch />
    </div>
  );
};
