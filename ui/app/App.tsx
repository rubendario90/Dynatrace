import React from "react";
import { Route, Routes } from "react-router-dom";

// 1. Importamos tus componentes sin las llaves {} porque usan "export default"
import PageLayout from "./components/layouts/PageLayout/PageLayout";

// 2. Importamos tus páginas (Asumiendo que estas sí usan "export const")
import { DashboardPage } from "./pages/DashboardPage";
import {AnalyticsPage} from "./pages/AnalyticsPage";
import {SettingsPage} from "./pages/SettingsPage";

export const App = () => {
  // Configuramos el menú de navegación para tu Header
  const navItems = [
    { href: "/", label: "Dashboard" },
    { href: "/analytics", label: "Analytics" },
    { href: "/settings", label: "Settings" }
  ];

  return (
    <PageLayout
      appName="Mi App Dynatrace"
      navigationItems={navItems}
      mainTitle="Vista Principal"
      mainSubtitle="Gestiona tus métricas aquí"
    >
      {/* Todo lo que pongamos aquí adentro, PageLayout lo pondrá en la sección "mainContent" */}
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </PageLayout>
  );
};