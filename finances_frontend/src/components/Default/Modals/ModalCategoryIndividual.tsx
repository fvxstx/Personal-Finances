"use client";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { DialogContent } from "@/components/ui/dialog";
import { ColorPicker } from "../ColorPicker";
import { IconPicker } from "../IconPicker";

export const ModalCategoryIndividual = ({ isEdit }: { isEdit?: boolean }) => {
  const [categoryColor, setCategoryColor] = useState("#000000");
  const [categoryIcon, setCategoryIcon] = useState("home");

  return (
    <DialogContent className="rounded-2xl">
      <DialogTitle className="text-2xl font-bold">
        {!isEdit ? "Criar nova" : "Editar"} categoria
      </DialogTitle>
      <form action="">
        <div className="grid gap-6 py-4">
          <div className="flex flex-col gap-2 items-start">
            <label className="text-right">Nome da Categoria</label>
            <div className="flex gap-2 w-full items-center">
              <input className="w-full border-b" />
            </div>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <div className="flex flex-col gap-2 items-start">
              <label className="text-right">Cor da Categoria</label>
              <ColorPicker
                selectedColor={categoryColor}
                onChange={setCategoryColor}
                label="Selecionar cor"
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label className="text-right">Icone da Conta</label>
              <IconPicker
                selectedIcon={categoryIcon}
                onChange={setCategoryIcon}
                label="Selecionar ícone"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-4">
          {!isEdit && (
            <button className="w-full text-principal hover:bg-principal hover:text-white font-semibold py-2 rounded-lg mt-4 cursor-pointer">
              Criar e adicionar outro
            </button>
          )}
          <button className="w-full bg-principal text-white hover:text-principal hover:bg-transparent hover:border hover:border-principal font-semibold py-2 rounded-lg mt-4 cursor-pointer">
            {!isEdit ? "Criar" : "Salvar"}
          </button>
        </div>
      </form>
    </DialogContent>
  );
};
