import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import AccountForm from "./AccountForm";

// Component for the button to create a new account
const NewAccountButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          <span className="ml-2">
            <Plus />
          </span>
          Nova conta
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-2xl">
        <AccountForm />
      </DialogContent>
    </Dialog>
  );
};

export default NewAccountButton;
