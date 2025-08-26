import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  delay?: number;
}

export function AnalyticsCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  className,
  delay = 0 
}: AnalyticsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className={cn("bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300", className)}>
        <CardContent className="p-6 dark:bg-background dark:shadow-2xl dark:border-white dark:border-1  ">
          <div className="flex items-center justify-between ">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground font-medium dark:text-white">{title}</p>
              <p className="text-2xl font-bold text-foreground">{value}</p>
              {trend && (
                <div className="flex items-center gap-1">
                  <span
                    className={cn(
                      "text-xs font-medium",
                      trend.isPositive ? "text-success" : "text-destructive"
                    )}
                  >
                    {trend.isPositive ? "+" : ""}{trend.value}%
                  </span>
                  <span className="text-xs text-muted-foreground">vs last month</span>
                </div>
              )}
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}