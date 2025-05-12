import HeaderDef from "@/components/Default/Header/Header";
import Title from "@/components/Default/Title";
import CardsDashboard from "@/components/Layouts/Dashboard/Cards/CardsDashboard";
import InfoChartsDashboard from "@/components/Layouts/Dashboard/InfoCharts/InfoChartDashboard";
import { Datepicker } from "@/components/ui/datepicker";

export default async function Home() {
  return (
    <div className="w-dvw h-dvh flex flex-col items-center">
      <HeaderDef />
      <main className="flex flex-col items-start w-full py-4 px-32 mt-10 gap-14">
        <div className="flex justify-between w-full items-center">
          <Title />
          <Datepicker />
        </div>
        <CardsDashboard />
        <InfoChartsDashboard />
      </main>
    </div>
  );
}
