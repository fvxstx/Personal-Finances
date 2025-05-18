import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ITableCategories } from "@/types/ICategory";
import { ModalCategoryIndividual } from "@/components/Default/Modals/ModalCategoryIndividual";

// Component for the button to create a new category
export const NewCategoryButton = (categoryButtonProps: ITableCategories) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`cursor-pointer ${
            categoryButtonProps.typeCategory === "expenses"
              ? "bg-red-500"
              : "bg-green-500"
          } font-bold text-lg rounded-full text-white`}
        >
          <Plus className="w-7 h-full" />
          Categoria de{" "}
          {categoryButtonProps.typeCategory === "expenses"
            ? "despesas"
            : "receitas"}
        </Button>
      </DialogTrigger>
      <ModalCategoryIndividual />
    </Dialog>
  );
};
