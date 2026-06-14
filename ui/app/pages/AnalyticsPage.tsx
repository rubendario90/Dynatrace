import React from 'react';
import PageLayout from '../components/layouts/PageLayout/PageLayout';
import TitleBar from '../components/layouts/TitleBar/TitleBar';
import { RefreshIcon } from '@dynatrace/strato-icons';

const AnalyticsPage: React.FC = () => {
  const navigationItems = [
    { href: '/', label: 'Dashboard' },
    { href: '/analytics', label: 'Analytics' },
    { href: '/settings', label: 'Settings' },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Analytics', href: '/analytics' },
  ];

  const actionButtons = [
    {
      icon: <RefreshIcon />,
      label: 'Refresh',
      onClick: () => console.log('Refresh clicked'),
    },
  ];

  const mainContent = (
    <div style={{ padding: '24px' }}>
      <h2>Analytics Overview</h2>
      <p>Your analytics data and charts will be displayed here</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginTop: '24px',
      }}>
        {[1, 2, 3, 4].map((card) => (
          <div
            key={card}
            style={{
              padding: '20px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              background: '#fff',
            }}
          >
            <h3>Metric {card}</h3>
            <p>Value: 0</p>
          </div>
        ))}
      </div>
    </div>
  );

  const detailViewContent = (
    <div style={{ padding: '24px' }}>
      <h3>Analytics Filters</h3>
      <p>Filter options for analytics data</p>
    </div>
  );

  return (
    <PageLayout
      appName="Dynatrace"
      navigationItems={navigationItems}
      mainTitle="Analytics"
      mainSubtitle="View and analyze your application metrics"
      mainContent={mainContent}
      detailViewContent={detailViewContent}
      onSettingsClick={() => console.log('Settings')}
    />
  );
};

export default AnalyticsPage;