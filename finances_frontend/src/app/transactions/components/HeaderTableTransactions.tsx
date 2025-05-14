import { ButtonPopoverNewTransaction } from "./ButtonPopoverNewTransaction";
import { ButtonsDateFilter } from "./ButtonsDateFilter";
import { ButtonsFilterAndSearch } from "./ButtonsFilterAndSearch";

export const HeaderTableTransactions = () => {
  return (
    <div className="flex justify-between gap-2 w-full">
      <ButtonPopoverNewTransaction />
      <ButtonsDateFilter />
      <ButtonsFilterAndSearch />
    </div>
  );
};
