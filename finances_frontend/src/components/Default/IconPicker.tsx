import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { defaultIcons } from "@/data/defaultIcons";

interface IconPickerProps {
  selectedIcon: number;
  onChange: (iconId: number) => void;
  label?: string;
}

export const IconPicker = ({
  selectedIcon,
  onChange,
  label = "Selecionar Ícone",
}: IconPickerProps) => {
  const selectedIconObj =
    defaultIcons.find((icon) => icon.id === selectedIcon) || defaultIcons[0];

  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="icon-picker">
          <AccordionTrigger className="flex justify-start items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8">
              {selectedIconObj.icon}
            </div>
            {label}
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-6 gap-3 p-2 max-h-[180px] overflow-y-auto">
              {defaultIcons.map((icon) => (
                <div
                  key={icon.id}
                  className={`flex flex-col items-center justify-center p-2 cursor-pointer rounded-md border hover:bg-gray-100 transition-colors ${
                    selectedIcon === icon.id
                      ? "bg-gray-100 border-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => onChange(icon.id)}
                  title={icon.name}
                >
                  {icon.icon}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
