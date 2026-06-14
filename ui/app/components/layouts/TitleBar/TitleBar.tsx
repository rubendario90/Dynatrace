import React, { ReactNode } from 'react';
import { TitleBar as StratoTitleBar, Page } from '@dynatrace/strato-components/layouts';
import { Button } from '@dynatrace/strato-components/buttons';
import { Breadcrumbs } from '@dynatrace/strato-components/navigation';
import {
  FavoriteIcon,
  InformationIcon,
  RefreshIcon,
  UnfavoriteIcon,
  XmarkIcon,
} from '@dynatrace/strato-icons';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ActionButton {
  icon: React.ReactNode;
  label?: string;
  onClick: () => void;
  variant?: 'default' | 'primary';
}

interface TitleBarProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  hasPrefix?: boolean;
  onPrefixClick?: () => void;
  actionButtons?: ActionButton[];
  hasAction?: boolean;
  onActionClick?: () => void;
  prefixIcon?: React.ReactNode;
}

const TitleBar: React.FC<TitleBarProps> = ({
  title,
  subtitle,
  breadcrumbs,
  hasPrefix = false,
  onPrefixClick,
  actionButtons = [],
  hasAction = false,
  onActionClick,
  prefixIcon,
}) => {
  return (
    <StratoTitleBar>
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

      {hasAction && (
        <StratoTitleBar.Action>
          <Button variant="default" onClick={onActionClick}>
            <Button.Prefix>
              <XmarkIcon />
            </Button.Prefix>
          </Button>
        </StratoTitleBar.Action>
      )}

      {hasPrefix && (
        <StratoTitleBar.Prefix>
          <Page.PanelControlButton
            target="sidebar"
            onClick={onPrefixClick}
          />
        </StratoTitleBar.Prefix>
      )}

      <StratoTitleBar.Title>{title}</StratoTitleBar.Title>

      {subtitle && <StratoTitleBar.Subtitle>{subtitle}</StratoTitleBar.Subtitle>}

      {actionButtons.length > 0 && (
        <StratoTitleBar.Suffix>
          <div style={{ display: 'flex', gap: '8px' }}>
            {actionButtons.map((btn, index) => (
              <Button
                key={index}
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
    </StratoTitleBar>
  );
};

export default TitleBar;