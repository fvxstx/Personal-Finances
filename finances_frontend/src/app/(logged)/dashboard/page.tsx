import Title from "@/components/Default/Title";

import { Datepicker } from "@/components/ui/datepicker";
import CardsDashboard from "./components/Cards/CardsDashboard";
import InfoChartsDashboard from "./components/InfoCharts/InfoChartDashboard";

export default async function DashboardPage() {
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
