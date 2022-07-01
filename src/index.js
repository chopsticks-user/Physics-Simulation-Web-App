import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css";
import "./styles/header-container.css";
import "./styles/plane-container.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
