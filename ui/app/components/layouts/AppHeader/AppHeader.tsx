import React, { ReactNode } from 'react';
import { AppHeader as StratoAppHeader, HelpMenu } from '@dynatrace/strato-components/layouts';
import { Button } from '@dynatrace/strato-components/buttons';
import { Tooltip } from '@dynatrace/strato-components/overlays';
import { 
  SettingIcon, 
  PlusIcon, 
  UploadIcon, 
  ShareIcon 
} from '@dynatrace/strato-icons';

interface NavigationItem {
  href: string;
  label: string;
}

interface AppHeaderProps {
  appName?: string;
  navigationItems?: NavigationItem[];
  headerActions?: ReactNode; 
  onSettingsClick?: () => void;
  helpMenuConfig?: unknown;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  appName = 'Ruben',
  navigationItems = [],
  headerActions, 
  onSettingsClick,
  helpMenuConfig,
}) => {
  return (
    <StratoAppHeader>
      {/* 1. SECCIÓN DE NAVEGACIÓN Y LOGO */}
      <StratoAppHeader.Navigation>
        <StratoAppHeader.Logo appName={appName} />
        
        {/* Renderizamos tu Intent Button aquí */}
        {headerActions}
        
        {/* Links antiguos */}
        {navigationItems.map((item) => (
          <StratoAppHeader.NavigationItem key={item.href} href={item.href}>
            {item.label}
          </StratoAppHeader.NavigationItem>
        ))}
      </StratoAppHeader.Navigation>

      {/* 2. NUEVA SECCIÓN DE BOTONES DE ACCIÓN (Action Items) */}
      <StratoAppHeader.ActionItems>
        <StratoAppHeader.ActionButton
          prefixIcon={<PlusIcon />}
          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault(); 
            // Aquí puedes agregar la lógica para "Add data"
            console.log("Add data clickeado");
          }}
        >
          Add data
        </StratoAppHeader.ActionButton>
        
        <StratoAppHeader.ActionItemGroup>
          <StratoAppHeader.ActionButton
            prefixIcon={<UploadIcon />}
            onClick={() => console.log("Upload document clickeado")}
          >
            Upload document
          </StratoAppHeader.ActionButton>
        </StratoAppHeader.ActionItemGroup>

        <StratoAppHeader.ActionButton
          prefixIcon={<ShareIcon />}
          showLabel={false}
          onClick={() => console.log("Share clickeado")}
          aria-label="Share this application"
        >
          Share
        </StratoAppHeader.ActionButton>
      </StratoAppHeader.ActionItems>

      {/* 3. SECCIÓN DE MENÚS (Settings y Ayuda) */}
      <StratoAppHeader.Menus>
        {onSettingsClick && (
          <Tooltip text="Settings">
            <Button onClick={onSettingsClick} variant="default">
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