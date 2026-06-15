import React from "react";
import { Route, Routes } from "react-router-dom";
import { IntentButton } from '@dynatrace/strato-components/buttons';
import { IntentPayload } from '@dynatrace-sdk/navigation';

// 1. Importamos tus componentes
import PageLayout from "./components/layouts/PageLayout/PageLayout";

// 2. Importamos tus páginas 
import { DashboardPage } from "./pages/DashboardPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { SettingsPage } from "./pages/SettingsPage";

export const App = () => {

  return (
    <PageLayout
      appName="Mi App Dynatrace"
      navigationItems={[]}
      mainTitle="Vista Principal"
      mainSubtitle="Gestiona tus métricas aquí"
    >
      {/* Las rutas se mantienen igual */}
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </PageLayout>
  );
};