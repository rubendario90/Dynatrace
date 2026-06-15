import React, { ReactNode } from 'react';
import { Page, TitleBar as StratoTitleBar } from '@dynatrace/strato-components/layouts';
import AppHeader from '../AppHeader/AppHeader'; 
import TitleBar from '../TitleBar/TitleBar'; 
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
  headerActions?: ReactNode; 
  mainTitle: string;
  mainSubtitle?: string;
  children?: ReactNode;
  sidebarContent?: ReactNode;
  detailViewContent?: ReactNode;
  onSettingsClick?: () => void;
  helpMenuConfig?: Record<string, string>;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  appName = 'MyApp',
  navigationItems = [],
  headerActions, 
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
      <Page.Header>
        <AppHeader
          appName={appName}
          navigationItems={navigationItems}
          headerActions={headerActions} 
          onSettingsClick={onSettingsClick}
          helpMenuConfig={helpMenuConfig}
        />
      </Page.Header>

      <Page.Sidebar>
        <StratoTitleBar>
          <StratoTitleBar.Title>Filtros</StratoTitleBar.Title>
          <StratoTitleBar.Subtitle>Selecciona las métricas necesarias</StratoTitleBar.Subtitle>
          <StratoTitleBar.Action>
            <Page.PanelControlButton />
          </StratoTitleBar.Action>
        </StratoTitleBar>
        
        {/* Aquí es donde React inyectará automáticamente tu <MenuMetricas /> 
            porque se lo pasamos desde App.tsx */}
        {sidebarContent}
        
      </Page.Sidebar>

      <Page.Main style={{ display: 'flex', flexDirection: 'column' }}>
        <TitleBar
          title={mainTitle}
          subtitle={mainSubtitle}
          hasSidebarToggle={true} 
          hasDetailViewToggle={true} 
        />
        {children || <Placeholder />}
      </Page.Main>

      <Page.DetailView style={{ display: 'flex', flexDirection: 'column' }}>
        <StratoTitleBar>
          <StratoTitleBar.Title>Settings</StratoTitleBar.Title>
          <StratoTitleBar.Subtitle>For content related to the main area</StratoTitleBar.Subtitle>
          <StratoTitleBar.Action>
            <Page.PanelControlButton />
          </StratoTitleBar.Action>
        </StratoTitleBar>
        {detailViewContent || <Placeholder />}
      </Page.DetailView>
    </Page>
  );
};

export default PageLayout;