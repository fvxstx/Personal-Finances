import Title from "@/components/Default/Title";
import { FormChangeInfos } from "./components/FormChangeInfos";
import { FormChangePassword } from "./components/FormChangePassword";

export default async function ProfilePage() {
  return (
    <main className="flex flex-col items-start w-full py-4 px-32 mt-10 gap-14">
      <div className="flex justify-between w-full items-center">
        <Title name="Minha Conta" />
      </div>
      <div className="flex justify-between w-full gap-6 items-center">
        <FormChangeInfos />
        <FormChangePassword />
      </div>
    </main>
  );
}
