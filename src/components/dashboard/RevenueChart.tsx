import { motion } from "framer-motion";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { month: "Jan", events: 12000, ecommerce: 3000, total: 15000 },
  { month: "Feb", events: 15000, ecommerce: 4200, total: 19200 },
  { month: "Mar", events: 18000, ecommerce: 5100, total: 23100 },
  { month: "Apr", events: 22000, ecommerce: 6800, total: 28800 },
  { month: "May", events: 20000, ecommerce: 7200, total: 27200 },
  { month: "Jun", events: 25000, ecommerce: 8500, total: 33500 },
];

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="bg-gradient-card shadow-md dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Revenue Analytics
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Monthly revenue breakdown by service type
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" stroke="var(--border)" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12, fill: "var(--foreground)" }}
                  axisLine={{ stroke: "var(--border)" }}
                  tickLine={{ stroke: "var(--border)" }}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "var(--foreground)" }}
                  axisLine={{ stroke: "var(--border)" }}
                  tickLine={{ stroke: "var(--border)" }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip 
                  formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
                  labelFormatter={(label) => `Month: ${label}`}
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    color: "hsl(var(--foreground))"
                  }}
                />
                <Legend 
                  wrapperStyle={{ color: "hsl(var(--foreground))" }}
                  iconType="circle"
                />
                <Line 
                  type="monotone" 
                  dataKey="events" 
                  stroke="hsl(var(--chart-primary))" 
                  strokeWidth={3}
                  name="Events Revenue"
                  dot={{ fill: "hsl(var(--chart-primary))", strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="ecommerce" 
                  stroke="hsl(var(--chart-secondary))" 
                  strokeWidth={3}
                  name="E-commerce Revenue"
                  dot={{ fill: "hsl(var(--chart-secondary))", strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="total" 
                  stroke="hsl(var(--chart-tertiary))" 
                  strokeWidth={3}
                  name="Total Revenue"
                  dot={{ fill: "hsl(var(--chart-tertiary))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
