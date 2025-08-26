"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Calendar,
  ShoppingBag,
  MessageSquare,
  Settings,
  Menu,
  X,
  Camera,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
}

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "vendors", label: "Vendors", icon: Users },
  { id: "events", label: "Events", icon: Calendar },
  { id: "ecommerce", label: "E-commerce", icon: ShoppingBag },
  { id: "contacts", label: "Contacts", icon: MessageSquare },
  { id: "settings", label: "Settings", icon: Settings },
];

// Responsive hook for desktop detection
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = () => setIsDesktop(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isDesktop;
}

export function DashboardLayout({
  children,
  activeSection,
  onSectionChange,
  onLogout,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useIsDesktop();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isDesktop ? 0 : sidebarOpen ? 0 : -280 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 border-r bg-card shadow-lg flex flex-col",
          "lg:static lg:translate-x-0 lg:z-auto"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow">
              <Camera className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-primary">SR Events</h2>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-3 transition-all duration-200 rounded-xl",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                    )}
                    onClick={() => {
                      onSectionChange(item.id);
                      setSidebarOpen(false);
                    }}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5",
                        isActive
                          ? "text-primary-foreground"
                          : "text-muted-foreground dark:text-gray-400"
                      )}
                    />
                    {item.label}
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
            onClick={onLogout}
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </Button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-card/80 backdrop-blur border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>

            <h1 className="text-xl font-semibold capitalize">
              {activeSection}
            </h1>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">
                  Super Administrator
                </p>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">
                  A
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6"
          >
            {/* ✅ children now inherit dark mode card styling */}
            <div className="bg-card text-card-foreground rounded-2xl shadow p-6">
              {children}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
