import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';

import { createRoot } from 'react-dom/client';
import { App } from './App';
import { init } from '@tma.js/sdk-react';
import { setBackgroundAsSecondary } from './helpers/setBackgroundAsSecondary';

setBackgroundAsSecondary();
init();
const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
