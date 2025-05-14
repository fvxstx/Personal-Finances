import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Datepicker } from "@/components/ui/datepicker";

export const ButtonsDateFilter = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="cursor-pointer">
        <MdKeyboardArrowLeft size={28} />
      </button>
      <Datepicker showYear />
      <button className="cursor-pointer">
        <MdKeyboardArrowRight size={28} />
      </button>
    </div>
  );
};
