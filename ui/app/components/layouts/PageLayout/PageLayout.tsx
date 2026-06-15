import React, { ReactNode } from 'react';
import { Page, TitleBar as StratoTitleBar } from '@dynatrace/strato-components/layouts';
import AppHeader from '../AppHeader/AppHeader'; // Tu AppHeader personalizado
import TitleBar from '../TitleBar/TitleBar'; // Tu TitleBar personalizado (lo usaremos para el Main)
import Borders from '@dynatrace/strato-design-tokens/borders';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';

const Placeholder = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      minHeight: '200px',
      marginTop: Spacings.Size24,
      borderRadius: Borders.Radius.Container.Default,
      backgroundColor: Colors.Background.Container.Neutral.Default,
    }}
  />
);

interface PageLayoutProps {
  appName?: string;
  navigationItems?: Array<{ href: string; label: string }>;
  mainTitle: string;
  mainSubtitle?: string;
  children?: ReactNode;
  sidebarContent?: ReactNode;
  detailViewContent?: ReactNode;
  onSettingsClick?: () => void;
  helpMenuConfig?: any;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  appName = 'MyApp',
  navigationItems = [],
  mainTitle,
  mainSubtitle,
  children,
  sidebarContent,
  detailViewContent,
  onSettingsClick,
  helpMenuConfig,
}) => {
  return (
    <Page>
      {/* HEADER */}
      <Page.Header>
        <AppHeader
          appName={appName}
          navigationItems={navigationItems}
          onSettingsClick={onSettingsClick}
          helpMenuConfig={helpMenuConfig}
        />
      </Page.Header>

      {/* SIDEBAR (Panel Izquierdo) */}
      <Page.Sidebar>
        <StratoTitleBar>
          <StratoTitleBar.Title>Sidebar</StratoTitleBar.Title>
          <StratoTitleBar.Subtitle>e.g. for navigation</StratoTitleBar.Subtitle>
          <StratoTitleBar.Action>
             {/* Este botón cierra el sidebar */}
            <Page.PanelControlButton />
          </StratoTitleBar.Action>
        </StratoTitleBar>
        {sidebarContent || <Placeholder />}
      </Page.Sidebar>

      {/* MAIN (Contenido Central) */}
      <Page.Main style={{ display: 'flex', flexDirection: 'column' }}>
         {/* Usamos tu TitleBar personalizado aquí */}
        <TitleBar
          title={mainTitle}
          subtitle={mainSubtitle}
          hasSidebarToggle={true} // Nueva prop que agregaremos a tu TitleBar
          hasDetailViewToggle={true} // Nueva prop para abrir el panel derecho si lo necesitas
        />
        {/* Aquí es donde entran las rutas de App.tsx */}
        {children || <Placeholder />}
      </Page.Main>

      {/* DETAIL VIEW (Panel Derecho - Settings) */}
      <Page.DetailView style={{ display: 'flex', flexDirection: 'column' }}>
        <StratoTitleBar>
          <StratoTitleBar.Title>Settings</StratoTitleBar.Title>
          <StratoTitleBar.Subtitle>For content related to the main area</StratoTitleBar.Subtitle>
          <StratoTitleBar.Action>
            {/* Este botón cierra el panel derecho */}
            <Page.PanelControlButton />
          </StratoTitleBar.Action>
        </StratoTitleBar>
        {detailViewContent || <Placeholder />}
      </Page.DetailView>
    </Page>
  );
};

export default PageLayout;