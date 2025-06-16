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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ButtonDelete } from "@/components/Default/ButtonDelete";
import { IconPicker } from "@/components/Default/IconPicker";
import { useEffect, useState } from "react";
import { AccountFormData, accountSchema } from "./schema";
import AccountService from "@/services/AccountService";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { IAccount } from "@/types/IAccount";

// Component for the account form
// This form is used to create and edit an account
const AccountForm = ({
  isEdit = false,
  accountData,
  onClose,
}: {
  isEdit?: boolean;
  accountData?: IAccount;
  onClose: () => void;
}) => {
  const [selectedIcon, setSelectedIcon] = useState(1);
  const session = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      initialValue: 0,
      bank: "",
      excludeFromTotal: false,
    },
  });

  // Function to handle form submission
  const onSubmit = async (data: AccountFormData) => {
    if (!isEdit) {
      const res = await AccountService.Create({
        name: data.bank,
        iconId: selectedIcon,
        userId: session.data!.user.sub,
        balanceStatus: data.excludeFromTotal ? 2 : 1,
        totalBalance: data.initialValue,
      });

      if (res) {
        onClose();
        setInterval(() => {}, 2000);
        window.location.reload();
        return;
      }
      toast.error("Erro ao criar conta");
    } else {
      const res = await AccountService.Update(
        {
          name: data.bank,
          iconId: selectedIcon,
          balanceStatus: data.excludeFromTotal ? 2 : 1,
        },
        accountData!.account.id
      );
      if (res) {
        onClose();
        setInterval(() => {}, 2000);
        window.location.reload();
        return;
      }
      toast.error("Erro ao editar conta");
    }
  };

  const onDelete = async () => {
    const res = await AccountService.Delete(accountData!.account.id);
    if (res) {
      onClose();
      setInterval(() => {}, 2000);
      window.location.reload();
      return;
    }
    toast.error("Error ao deletar conta");
  };

  useEffect(() => {
    if (isEdit) {
      reset({
        initialValue: accountData?.account.total_Balance,
        bank: accountData?.account.name,
        excludeFromTotal:
          accountData?.account.balanceStatus == 2 ? true : false,
      });
      setSelectedIcon(accountData!.account.icon_Id);
    }
  }, []);

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
              disabled={isEdit}
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
          {errors.bank && (
            <span className="text-red-500 text-xs">{errors.bank.message}</span>
          )}
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
          <ButtonDelete onDelete={onDelete} title="Conta">
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
