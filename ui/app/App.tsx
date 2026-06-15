import React, { useState } from "react"; // <-- Importante: necesitamos useState
import { Route, Routes } from "react-router-dom";

// 1. Importamos tus componentes
import PageLayout from "./components/layouts/PageLayout/PageLayout";

// 2. Importamos tus páginas 
import { DashboardPage } from "./pages/DashboardPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { SettingsPage } from "./pages/SettingsPage";

// IMPORTANTE: Verifica que esta ruta coincida exactamente con donde guardaste el archivo
import { MenuMetricas } from "./components/layouts/MenuMetricas/MenuMetricas";

export const App = () => {
  // === EL CEREBRO ===
  // Aquí guardamos qué métrica seleccionó el usuario (CPU, MEMORIA, etc.)
  const [metric, setMetric] = useState<string>('');

  return (
    <PageLayout
      appName="Mi App Dynatrace"
      navigationItems={[]}
      mainTitle="Vista Principal"
      mainSubtitle="Gestiona tus métricas aquí"
      
      // === EL MENÚ LATERAL ===
      // Se lo pasamos al Layout, y le decimos que cuando alguien haga clic,
      // actualice nuestra variable 'metric' usando 'setMetric'
      sidebarContent={<MenuMetricas onSelectMetric={setMetric} />}
    >
      {/* === LAS PÁGINAS CENTRALES === */}
      <Routes>
        {/* Le enviamos la métrica seleccionada a tu Dashboard para que dibuje la gráfica */}
        <Route path="/" element={<DashboardPage selectedMetric={metric} />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </PageLayout>
  );
};