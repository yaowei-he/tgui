import { ReactNode } from 'react';
import { Cell, IconContainer, Section } from '@telegram-apps/telegram-ui';

import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/chat';
import { Icon28Devices } from '@telegram-apps/telegram-ui/dist/icons/28/devices';
import { Icon28Stats } from '@telegram-apps/telegram-ui/dist/icons/28/stats';
import { Link } from 'react-router-dom';

type CellProps = {
  id: number;
  icon: ReactNode;
  text: string;
}

const cells: CellProps[] = [
  {
    id: 1,
    icon: <Icon28Chat />,
    text: 'Chat Settings',
  },
  {
    id: 2,
    icon: <Icon28Devices />,
    text: 'Data and Storage',
  },
  {
    id: 3,
    icon: <Icon28Stats />,
    text: 'Devices',
  },
];

export const CellSection = () => (
  <Section header="This is section header">
    <Link to="/cell" style={{ textDecoration: 'none' }}>
      <div style={{ padding: '16px', color: 'var(--tgui--text_color)' }}>前往 Pin页面</div>
    </Link>
    <Link to="/form" style={{ textDecoration: 'none' }}>
      <div style={{ padding: '16px', color: 'var(--tgui--text_color)' }}>前往表单页面</div>
    </Link>
  </Section>
);
