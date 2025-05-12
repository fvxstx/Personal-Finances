import BiggestExpensesDashboard from "./BiggestExpenses/BiggestExpensesDashboard";
import BillsToPayDashboard from "./Bills/BillsToPayDashboard";
import BillsToReceiveDashboard from "./Bills/BillsToReceiveDashboard";
import LimitExpensesDashboard from "./LimitExpenses/LimitExpensesDashboard";

const InfoChartDashboard = () => {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="flex items-center w-full gap-4">
        <BillsToPayDashboard />
        <BiggestExpensesDashboard />
      </div>
      <div className="flex items-start w-full gap-4">
        <LimitExpensesDashboard />
        <BillsToReceiveDashboard />
      </div>
    </div>
  );
};

export default InfoChartDashboard;
