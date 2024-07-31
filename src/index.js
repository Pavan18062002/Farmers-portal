import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n'; // Import localization configuration
import './App.css'; // Import global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
