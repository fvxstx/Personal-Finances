"use client";

import { useState } from "react";
import { FaPiggyBank } from "react-icons/fa";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AccountForm from "./AccountForm";
import { AccountItem, IAccountItem } from "./AccountItem";

const accountsMock: IAccountItem[] = [
  {
    name: "Savings",
    value: "923.73",
    icon: (
      <FaPiggyBank className="w-10 h-full bg-blue-500 text-white p-2 rounded-full" />
    ),
  },
  {
    name: "Checking",
    value: "1,200.00",
    icon: (
      <FaPiggyBank className="w-10 h-full bg-green-500 text-white p-2 rounded-full" />
    ),
  },
  {
    name: "Investment",
    value: "5,000.00",
    icon: (
      <FaPiggyBank className="w-10 h-full bg-yellow-500 text-white p-2 rounded-full" />
    ),
  },
];

// Component for displaying a list of account items
export const AccountsItems = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-8 bg-background3 p-10 rounded-xl w-full">
      {/* All accounts */}
      {accountsMock.map((accountItem, index) => (
        <AccountItem
          key={index}
          name={accountItem.name}
          value={accountItem.value}
          icon={accountItem.icon}
          onOpen={() => setOpen(true)}
        />
      ))}
      {/* Dialog to edit the account */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-2xl">
          <AccountForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};
