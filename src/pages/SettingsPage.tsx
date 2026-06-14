import React from 'react';
import PageLayout from '../components/layouts/PageLayout/PageLayout';

const SettingsPage: React.FC = () => {
  const navigationItems = [
    { href: '/', label: 'Dashboard' },
    { href: '/analytics', label: 'Analytics' },
    { href: '/settings', label: 'Settings' },
  ];

  const mainContent = (
    <div style={{ padding: '24px' }}>
      <h2>Settings</h2>
      <form>
        <div style={{ marginBottom: '24px' }}>
          <label>
            <input type="checkbox" defaultChecked />
            Enable Notifications
          </label>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label>
            Theme:
            <select style={{ marginLeft: '8px' }}>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </label>
        </div>
        <button type="submit" style={{
          padding: '8px 16px',
          backgroundColor: '#0066cc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
          Save Settings
        </button>
      </form>
    </div>
  );

  const sidebarContent = (
    <div style={{ padding: '24px' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '12px' }}><a href="#general">General</a></li>
          <li style={{ marginBottom: '12px' }}><a href="#security">Security</a></li>
          <li style={{ marginBottom: '12px' }}><a href="#notifications">Notifications</a></li>
          <li style={{ marginBottom: '12px' }}><a href="#integrations">Integrations</a></li>
        </ul>
      </nav>
    </div>
  );

  return (
    <PageLayout
      appName="Dynatrace"
      navigationItems={navigationItems}
      mainTitle="Settings"
      mainSubtitle="Configure your application preferences"
      detailViewTitle="Help"
      detailViewSubtitle="Settings documentation and tips"
      mainContent={mainContent}
      sidebarContent={sidebarContent}
    />
  );
};

export default SettingsPage;