"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const colors = [
  { name: "Vermelho", hex: "#FF0000" },
  { name: "Vermelho Escuro", hex: "#8B0000" },
  { name: "Rosa", hex: "#FF69B4" },
  { name: "Rosa Escuro", hex: "#C71585" },
  { name: "Laranja", hex: "#FFA500" },
  { name: "Laranja Escuro", hex: "#FF4500" },
  { name: "Amarelo", hex: "#FFFF00" },
  { name: "Amarelo Escuro", hex: "#FFD700" },
  { name: "Verde", hex: "#00FF00" },
  { name: "Verde Escuro", hex: "#006400" },
  { name: "Verde-azulado", hex: "#00CED1" },
  { name: "Azul Claro", hex: "#87CEEB" },
  { name: "Azul", hex: "#0000FF" },
  { name: "Azul Escuro", hex: "#00008B" },
  { name: "Roxo", hex: "#800080" },
  { name: "Roxo Escuro", hex: "#4B0082" },
  { name: "Marrom", hex: "#A52A2A" },
  { name: "Marrom Escuro", hex: "#8B4513" },
  { name: "Cinza Claro", hex: "#D3D3D3" },
  { name: "Cinza", hex: "#808080" },
  { name: "Preto", hex: "#000000" },
  { name: "Branco", hex: "#FFFFFF" },
];

interface ColorPickerProps {
  selectedColor: string;
  onChange: (color: string) => void;
  label?: string;
}

export const ColorPicker = ({
  selectedColor,
  onChange,
  label = "Selecionar Cor",
}: ColorPickerProps) => {
  const [selectedHex, setSelectedHex] = useState(selectedColor || "#000000");

  const handleColorSelect = (hex: string) => {
    setSelectedHex(hex);
    onChange(hex);
  };

  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="color-picker">
          <AccordionTrigger className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full border border-gray-300"
              style={{ backgroundColor: selectedHex }}
            />
            {label}
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-5 gap-2 p-2">
              {colors.map((color) => (
                <div
                  key={color.hex}
                  className="flex flex-col items-center"
                  onClick={() => handleColorSelect(color.hex)}
                >
                  <div
                    className={`w-8 h-8 rounded-full cursor-pointer border hover:scale-110 transition-transform ${
                      selectedHex === color.hex
                        ? "ring-2 ring-offset-2 ring-principal"
                        : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-3">
              <input
                type="text"
                value={selectedHex}
                onChange={(e) => handleColorSelect(e.target.value)}
                className="px-2 py-1 border border-gray-300 rounded-md text-sm"
                maxLength={7}
              />
              <input
                type="color"
                value={selectedHex}
                onChange={(e) => handleColorSelect(e.target.value)}
                className="w-8 h-8 cursor-pointer"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
