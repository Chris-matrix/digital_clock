import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Creates a root for the React application and renders the App component.
 * This is the entry point of the React application.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Measures and reports web vitals for performance monitoring.
 * This function is typically used to send performance metrics to an analytics endpoint.
 */
reportWebVitals();
