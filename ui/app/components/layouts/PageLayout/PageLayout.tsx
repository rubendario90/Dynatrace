import React, { ReactNode } from 'react';
import { Page } from '@dynatrace/strato-components/layouts';
import TitleBar from '../TitleBar/TitleBar';
import AppHeader from '../AppHeader/AppHeader';
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
  detailViewTitle?: string;
  detailViewSubtitle?: string;
  children?: ReactNode;
  sidebarContent?: ReactNode;
  mainContent?: ReactNode;
  detailViewContent?: ReactNode;
  onSettingsClick?: () => void;
  onMainMenuClick?: () => void;
  onSidebarToggle?: () => void;
  helpMenuConfig?: any;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  appName = 'MyApp',
  navigationItems = [],
  mainTitle,
  mainSubtitle = 'Place your main content in this area',
  detailViewTitle = 'Settings',
  detailViewSubtitle = 'For content related to the main area',
  children,
  sidebarContent,
  mainContent,
  detailViewContent,
  onSettingsClick,
  onMainMenuClick,
  onSidebarToggle,
  helpMenuConfig,
}) => {
  return (
    <Page>
      <Page.Header>
        <AppHeader
          appName={appName}
          navigationItems={navigationItems}
          onSettingsClick={onSettingsClick}
          helpMenuConfig={helpMenuConfig}
        />
      </Page.Header>
      <Page.Sidebar>
        <TitleBar
          title="Sidebar"
          subtitle="e.g. for navigation"
          hasAction
          onActionClick={onSidebarToggle}
        />
        {sidebarContent || <Placeholder />}
      </Page.Sidebar>
      <Page.Main style={{ display: 'flex', flexDirection: 'column' }}>
        <TitleBar
          title={mainTitle}
          subtitle={mainSubtitle}
          hasPrefix
          onPrefixClick={onMainMenuClick}
          hasAction
        />
        {mainContent || children || <Placeholder />}
      </Page.Main>
      <Page.DetailView style={{ display: 'flex', flexDirection: 'column' }}>
        <TitleBar
          title={detailViewTitle}
          subtitle={detailViewSubtitle}
          hasAction
        />
        {detailViewContent || <Placeholder />}
      </Page.DetailView>
    </Page>
  );
};

export default PageLayout;