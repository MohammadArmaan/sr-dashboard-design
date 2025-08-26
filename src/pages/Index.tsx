import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Dashboard } from "@/pages/Dashboard";
import { Vendors } from "@/pages/Vendors";
import { Events } from "@/pages/Events";
import { Ecommerce } from "@/pages/Ecommerce";
import { Contacts } from "@/pages/Contacts";
import { Settings } from "@/pages/Settings";
import { ThemeProvider } from "next-themes"; // ✅ use next-themes

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleLogin = (credentials: { username: string; password: string }) => {
    // Demo login - replace with backend auth later
    if (credentials.username === "admin" && credentials.password === "pass1234") {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveSection("dashboard");
  };

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "vendors":
        return <Vendors />;
      case "events":
        return <Events />;
      case "ecommerce":
        return <Ecommerce />;
      case "contacts":
        return <Contacts />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {!isAuthenticated ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <DashboardLayout
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={handleLogout}
        >
          {renderSection()}
        </DashboardLayout>
      )}
    </ThemeProvider>
  );
};

export default Index;
