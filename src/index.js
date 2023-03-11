import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// If a componant is being rendered on page then it's css is applied to whole page in browser
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

