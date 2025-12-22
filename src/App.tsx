import { AppRoot, List } from '@telegram-apps/telegram-ui';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { PinSection } from './components/PinSection';
import { Home } from './components/Home';
import { OverSection } from './components/OverSection';
import { PasswordSection } from './components/PasswordSection';


export const App = () => (
  <BrowserRouter>
    <AppRoot>
      <Routes>
        {/* 定义三个路由 */}
        <Route path="/" element={<Home />} />
        <Route path="/pin" element={<List><PinSection /></List>} />
        <Route path="/over" element={<List><OverSection /></List>} />
        <Route path="/password" element={<List><PasswordSection /></List>} />
      </Routes>
    </AppRoot>
  </BrowserRouter>
);