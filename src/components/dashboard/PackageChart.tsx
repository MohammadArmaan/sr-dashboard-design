import { motion } from "framer-motion";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Gold Package", value: 35, color: "hsl(var(--chart-secondary))" },
  { name: "Premium Package", value: 45, color: "hsl(var(--chart-primary))" },
  { name: "Deluxe Package", value: 20, color: "hsl(var(--chart-tertiary))" },
];

export function PackageChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card className="bg-gradient-card shadow-md dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Package Popularity
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Distribution of event package bookings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`${value}%`, "Bookings"]}
                  contentStyle={{
                    backgroundColor: "var(--card)", // Tailwind CSS variable fallback
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    color: "var(--foreground)", // Dark/light text color based on theme variables
                  }}
                  itemStyle={{ color: "inherit" }} // inherit color from tooltip text色
                />
                <Legend
                  wrapperStyle={{
                    color: "hsl(var(--foreground))",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                  iconType="circle"
                  formatter={(value) => (
                    <span className="dark:text-gray-200">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
