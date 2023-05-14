import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { VotesProvider } from './state/VotesProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VotesProvider>
      <App />
    </VotesProvider>
  </React.StrictMode>
);
