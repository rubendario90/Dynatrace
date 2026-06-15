import React from 'react';
import { TitleBar as StratoTitleBar, Page } from '@dynatrace/strato-components/layouts';
import { Button } from '@dynatrace/strato-components/buttons';
import { Breadcrumbs } from '@dynatrace/strato-components/navigation';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ActionButton {
  icon: React.ReactNode;
  label?: string;
  onClick: () => void;
  // CORRECCIÓN: Reemplazamos 'primary' por las variantes correctas de Strato
  variant?: 'default' | 'emphasized' | 'accent'; 
}

interface TitleBarProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  actionButtons?: ActionButton[];
  hasSidebarToggle?: boolean; // Controla si mostramos el botón del panel izquierdo
  hasDetailViewToggle?: boolean; // Controla si mostramos el botón del panel derecho
}

const TitleBar: React.FC<TitleBarProps> = ({
  title,
  subtitle,
  breadcrumbs,
  actionButtons = [],
  hasSidebarToggle = false,
  hasDetailViewToggle = false,
}) => {
  return (
    <StratoTitleBar>
      {/* Botón para abrir el panel IZQUIERDO (Sidebar) */}
      {hasSidebarToggle && (
        <StratoTitleBar.Prefix>
          <Page.PanelControlButton target="sidebar" />
        </StratoTitleBar.Prefix>
      )}

      {/* Migas de pan */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <StratoTitleBar.Navigation>
          <Breadcrumbs>
            {breadcrumbs.map((item, index) => (
              <Breadcrumbs.Item key={index} href={item.href || '#'}>
                {item.label}
              </Breadcrumbs.Item>
            ))}
          </Breadcrumbs>
        </StratoTitleBar.Navigation>
      )}

      {/* Título y Subtítulo */}
      <StratoTitleBar.Title>{title}</StratoTitleBar.Title>
      {subtitle && <StratoTitleBar.Subtitle>{subtitle}</StratoTitleBar.Subtitle>}

      {/* Botones de acción personalizados */}
      {actionButtons.length > 0 && (
        <StratoTitleBar.Suffix>
          <div style={{ display: 'flex', gap: '8px' }}>
            {actionButtons.map((btn, index) => (
              <Button
                key={index}
                // Así es como pasas la variable. Si btn.variant no existe, usa 'default'
                variant={btn.variant || 'default'} 
                onClick={btn.onClick}
              >
                <Button.Prefix>{btn.icon}</Button.Prefix>
                {btn.label}
              </Button>
            ))}
          </div>
        </StratoTitleBar.Suffix>
      )}

      {/* Botón para abrir el panel DERECHO (DetailView) */}
      {hasDetailViewToggle && (
        <StratoTitleBar.Action>
          <Page.PanelControlButton target="details" />
        </StratoTitleBar.Action>
      )}
    </StratoTitleBar>
  );
};

export default TitleBar;