import Title from "@/components/Default/Title";
import CardsDashboard from "@/components/Layouts/Dashboard/Cards/CardsDashboard";
import InfoChartsDashboard from "@/components/Layouts/Dashboard/InfoCharts/InfoChartDashboard";
import { Datepicker } from "@/components/ui/datepicker";

export default async function Home() {
  return (
    <main className="flex flex-col items-start w-full py-4 px-32 mt-10 gap-14">
      <div className="flex justify-between w-full items-center">
        <Title name="Dashboard" />
        <Datepicker />
      </div>
      <CardsDashboard />
      <InfoChartsDashboard />
    </main>
  );
}
