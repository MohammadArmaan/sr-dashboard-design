import { 
  Users, 
  Calendar, 
  DollarSign, 
  ShoppingCart,
  TrendingUp,
  Award
} from "lucide-react";
import { AnalyticsCard } from "@/components/dashboard/AnalyticsCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { PackageChart } from "@/components/dashboard/PackageChart";

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnalyticsCard
          title="Total Customers"
          value="1,247"
          icon={Users}
          trend={{ value: 12.5, isPositive: true }}
          delay={0.1}
        />
        <AnalyticsCard
          title="Active Events"
          value="89"
          icon={Calendar}
          trend={{ value: 8.2, isPositive: true }}
          delay={0.2}
        />
        <AnalyticsCard
          title="Monthly Revenue"
          value="$33,500"
          icon={DollarSign}
          trend={{ value: 15.3, isPositive: true }}
          delay={0.3}
        />
        <AnalyticsCard
          title="E-commerce Orders"
          value="456"
          icon={ShoppingCart}
          trend={{ value: 23.1, isPositive: true }}
          delay={0.4}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <PackageChart />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnalyticsCard
          title="Vendor Performance"
          value="4.8/5"
          icon={Award}
          className="md:col-span-1"
          delay={0.6}
        />
        <AnalyticsCard
          title="Growth Rate"
          value="+18.5%"
          icon={TrendingUp}
          trend={{ value: 4.2, isPositive: true }}
          className="md:col-span-2"
          delay={0.7}
        />
      </div>
    </div>
  );
}