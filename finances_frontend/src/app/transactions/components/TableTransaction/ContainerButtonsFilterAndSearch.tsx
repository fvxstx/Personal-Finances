import { ButtonSearch } from "./Buttons/ButtonSearch";
import { ModalFormFilter } from "./Modals/ModalFormFilter";

export const ContainerButtonsFilterAndSearch = () => {
  return (
    <div className="flex items-center gap-4">
      <ButtonSearch />
      <ModalFormFilter />
    </div>
  );
};
