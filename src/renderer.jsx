import { createRoot } from 'react-dom/client';
import './index.css';

import Routes from './pages/routes';

const domNode = document.getElementById('app');
const root = createRoot(domNode);

root.render(<Routes />);
