import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

// Ensure the root element is not null
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 