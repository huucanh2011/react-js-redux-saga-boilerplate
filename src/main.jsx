import { createRoot } from 'react-dom/client';

import App from './App.jsx';

import '@/styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

if (import.meta.env.MODE === 'production') {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

root.render(<App />);
