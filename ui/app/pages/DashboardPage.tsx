import React from 'react';
import PageLayout from '../components/layouts/PageLayout/PageLayout';
import { RefreshIcon, UnfavoriteIcon, FavoriteIcon } from '@dynatrace/strato-icons';

const DashboardPage: React.FC = () => {
  const navigationItems = [
    { href: '/', label: 'Dashboard' },
    { href: '/analytics', label: 'Analytics' },
    { href: '/settings', label: 'Settings' },
  ];

  const handleSettingsClick = () => {
    console.log('Settings clicked');
  };

  const handleRefresh = () => {
    console.log('Refresh clicked');
  };

  const mainContent = (
    <div style={{ padding: '24px' }}>
      <h2>Welcome to Dashboard</h2>
      <p>Your main content goes here</p>
    </div>
  );

  const sidebarContent = (
    <div style={{ padding: '24px' }}>
      <nav>
        <ul>
          <li><a href="#">Navigation Item 1</a></li>
          <li><a href="#">Navigation Item 2</a></li>
          <li><a href="#">Navigation Item 3</a></li>
        </ul>
      </nav>
    </div>
  );

  const detailViewContent = (
    <div style={{ padding: '24px' }}>
      <h3>Configuration Settings</h3>
      <p>Settings content goes here</p>
    </div>
  );

  return (
    <PageLayout
      appName="Dynatrace"
      navigationItems={navigationItems}
      mainTitle="Dashboard"
      mainSubtitle="Welcome to your Dynatrace dashboard"
      detailViewTitle="Configuration"
      detailViewSubtitle="Manage your settings"
      mainContent={mainContent}
      sidebarContent={sidebarContent}
      detailViewContent={detailViewContent}
      onSettingsClick={handleSettingsClick}
      helpMenuConfig={{
        whatsNew: 'default',
        getStarted: { onSelect: () => console.log('Get Started clicked') },
        documentation: [
          {
            label: 'Dynatrace Hub',
            href: 'https://dynatrace.com',
            onSelect: () => console.log('Hub clicked'),
          },
          {
            label: 'Documentation',
            onSelect: () => console.log('Docs clicked'),
          },
        ],
        keyboardShortcuts: 'default',
        feedback: { onSelect: () => console.log('Feedback clicked') },
        about: 'default',
      }}
    />
  );
};

export default DashboardPage;