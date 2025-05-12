import BiggestExpensesDashboard from "./BiggestExpensesDashboard";
import BillsToPayDashboard from "./BillsToPayDashboard";
import BillsToReceiveDashboard from "./BillsToReceiveDashboard";

const InfoChartsDashboard = () => {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="flex items-center w-full gap-4">
        <BillsToPayDashboard />
        <BillsToReceiveDashboard />
      </div>
      <div className="flex items-center w-full gap-4">
        <BiggestExpensesDashboard />
      </div>
    </div>
  );
};

export default InfoChartsDashboard;
