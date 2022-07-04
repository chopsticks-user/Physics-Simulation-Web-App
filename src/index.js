import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import "./components/Header/header-container.css";
import "./components/WorkSpace/work-space-container.css";
import "./components/Space2D/space-2d-container.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
