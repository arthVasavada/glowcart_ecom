import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this is correctly imported
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
