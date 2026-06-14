import React from 'react';
import { AppHeader as StratoAppHeader } from '@dynatrace/strato-components/layouts';
import { HelpMenu } from '@dynatrace/strato-components/layouts';
import { Button } from '@dynatrace/strato-components/buttons';
import { Tooltip } from '@dynatrace/strato-components/overlays';
import { SettingIcon } from '@dynatrace/strato-icons';

interface NavigationItem {
  href: string;
  label: string;
}

interface AppHeaderProps {
  appName?: string;
  navigationItems?: NavigationItem[];
  onSettingsClick?: () => void;
  helpMenuConfig?: any;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  appName = 'MyApp',
  navigationItems = [],
  onSettingsClick,
  helpMenuConfig,
}) => {
  return (
    <StratoAppHeader>
      <StratoAppHeader.Navigation>
        <StratoAppHeader.Logo appName={appName} />
        {navigationItems.map((item) => (
          <StratoAppHeader.NavigationItem key={item.href} href={item.href}>
            {item.label}
          </StratoAppHeader.NavigationItem>
        ))}
      </StratoAppHeader.Navigation>
      <StratoAppHeader.Menus>
        {onSettingsClick && (
          <Tooltip text="Settings">
            <Button onClick={onSettingsClick}>
              <Button.Prefix>
                <SettingIcon />
              </Button.Prefix>
            </Button>
          </Tooltip>
        )}
        {helpMenuConfig && <HelpMenu entries={helpMenuConfig} />}
      </StratoAppHeader.Menus>
    </StratoAppHeader>
  );
};

export default AppHeader;