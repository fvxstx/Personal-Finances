import Image from "next/image";
import Navbar from "./NavBar";
import MoreOptionsPopover from "./MoreOptionsPopover";
import Link from "next/link";

// Header component for the application
const HeaderDef = async () => {
  return (
    <header className="w-full flex justify-around items-center gap-4 bg-principal text-foreground2 p-4">
      <Link href={"/dashboard"}>
        {/* <h1 className="text-2xl font-bold font-uncial">Minhas Finanças</h1> */}
        <Image
          width={100}
          height={100}
          src={"/logo.png"}
          alt="Logo"
          className="h-auto w-40"
        />
      </Link>
      <Navbar />
      <div className="flex justify-between items-center gap-6">
        <div className="flex gap-2 items-center justify-center">
          <Image
            width={100}
            height={100}
            src={"/my-photo.jpg"}
            alt=""
            className="rounded-full h-10 w-auto"
          />
          <h2 className="font-bold text-xl">Fausto T</h2>
        </div>
        <MoreOptionsPopover />
      </div>
    </header>
  );
};

export default HeaderDef;
