"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import AccountForm from "./AccountForm";
import { useState } from "react";

// Component for the button to create a new account
const NewAccountButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          <span className="ml-2">
            <Plus />
          </span>
          Nova conta
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-2xl">
        <DialogDescription className="hidden" />
        <AccountForm onClose={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default NewAccountButton;
