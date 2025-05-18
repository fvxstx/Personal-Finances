"use client";
import { Button } from "@/components/ui/button";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BiSolidBank } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ButtonDelete } from "@/components/Default/ButtonDelete";
import { IconPicker } from "@/components/Default/IconPicker";
import { useState } from "react";

// Schema validation Zod
const accountSchema = z.object({
  initialValue: z
    .number({ invalid_type_error: "Informe um valor válido" })
    .min(0, "Valor não pode ser negativo"),
  bank: z.string().min(2, "Informe a instituição bancária"),
  icon: z.string().max(2, "Máximo 2 caracteres"),
  excludeFromTotal: z.boolean().optional(),
});

type AccountFormData = z.infer<typeof accountSchema>;

// Component for the account form
// This form is used to create and edit an account
const AccountForm = ({ isEdit = false }: { isEdit?: boolean }) => {
  const [selectedIcon, setSelectedIcon] = useState("bank");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      initialValue: 0,
      bank: "",
      icon: "",
      excludeFromTotal: false,
    },
  });

  // Function to handle form submission
  async function onSubmit(data: AccountFormData) {
    console.log("Dados enviados:", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogHeader>
        <DialogTitle className="font-bold text-2xl">
          {isEdit ? "Editar" : "Criar"} Conta
        </DialogTitle>
      </DialogHeader>
      <div className="grid gap-6 py-4">
        <div className="flex flex-col gap-2 items-start">
          <label className="text-right">Valor Inicial</label>
          <div className="flex gap-2 w-full items-center">
            <RiMoneyDollarCircleLine size={24} />
            <input
              className="w-full border-b"
              type="number"
              {...register("initialValue", { valueAsNumber: true })}
              step="0.01"
            />
          </div>
          {errors.initialValue && (
            <span className="text-red-500 text-xs">
              {errors.initialValue.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label className="text-right">Instituição Bancaria</label>
          <div className="flex gap-2 w-full items-center">
            <BiSolidBank size={24} />
            <input className="w-full border-b" {...register("bank")} />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label className="text-right">Icone da Conta</label>
          <IconPicker selectedIcon={selectedIcon} onChange={setSelectedIcon} />
        </div>
        <div className="flex flex-col gap-2 items-start mt-4">
          <div className="flex gap-2 w-full items-center">
            <IoIosInformationCircleOutline size={24} />
            <input
              className="w-fit border-b"
              type="checkbox"
              {...register("excludeFromTotal")}
            />
            <span>Não somar no Saldo Geral</span>
          </div>
        </div>
      </div>
      <DialogFooter className="flex justify-between w-full sm:justify-between items-end mt-6">
        {isEdit && (
          <ButtonDelete title="Conta">
            <Button
              type="button"
              className="cursor-pointer bg-red-500 text-white"
            >
              Deletar
            </Button>
          </ButtonDelete>
        )}

        <Button type="submit" className="bg-principal cursor-pointer">
          Salvar
        </Button>
      </DialogFooter>
    </form>
  );
};

export default AccountForm;
