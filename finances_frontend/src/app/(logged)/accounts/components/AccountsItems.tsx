"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import AccountForm from "./AccountForm";
import { AccountItem } from "./AccountItem";
import { IAccount } from "@/types/IAccount";
import { defaultIcons } from "@/data/defaultIcons";

// Component for displaying a list of account items
export const AccountsItems = ({
  accountData,
}: {
  accountData?: IAccount[];
}) => {
  const [open, setOpen] = useState(false);
  const [currentAccount, setCurrentAccount] = useState<IAccount>();

  return (
    <div className="flex flex-col gap-8 bg-background3 p-10 rounded-xl w-full">
      {/* All accounts */}
      {accountData?.map((accountItem, index) => {
        const currentValue = accountItem.account.total_Balance.toLocaleString(
          "pt-br",
          {
            style: "currency",
            currency: "BRL",
          }
        );

        const currentIcon = defaultIcons[accountItem.account.icon_Id - 1];

        return (
          <AccountItem
            key={index}
            name={accountItem.account.name}
            value={currentValue}
            icon={currentIcon.icon}
            onOpen={() => {
              setOpen(true);
              setCurrentAccount(accountItem);
            }}
          />
        );
      })}
      {/* Dialog to edit the account */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-2xl max-h-screen overflow-y-auto">
          <DialogDescription className="hidden"></DialogDescription>
          <AccountForm
            isEdit
            onClose={() => setOpen(false)}
            accountData={currentAccount}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
