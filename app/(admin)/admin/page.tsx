import BellButton from "@/components/common/BellButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CommonCard from "@/components/common/CommonCard";
import { ArrowUp } from "lucide-react";


const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <header className="bg-white border-b border-gray-200 py-4 w-full">
          <div className="flex items-center px-4">
            <div className="flex-1">
              <h1 className="text-2xl font-semibold text-gray-900">
                Welcome back, <span className="text-green-500">Riza</span>
              </h1>
              <p className="text-gray-600 mt-1">
                Track, manage and forecast your turf dashboard.
              </p>
            </div>
            <BellButton />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 px-4 pt-6">
          <CommonCard
            title="Total Turfs"
            value="27"
            subtitle="40% vs last month"
            subtitleIcon={ArrowUp}
            subtitleColor="text-green-600"
          />
          <CommonCard
            title="Total Earnings"
            value="LKR 27,500"
            valueColor="text-green-500"
            subtitle="40% vs last month"
            subtitleIcon={ArrowUp}
            subtitleColor="text-green-600"
          />
          <CommonCard
            title="Wallet Balance"
            value="LKR 35,500"
            valueColor="text-green-500"
            subtitle="Last updated on August"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
