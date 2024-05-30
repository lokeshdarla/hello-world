import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { TooltipProvider } from './components/ui/tooltip';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <TooltipProvider>
        <App />
      </TooltipProvider>

    </Router>
  </React.StrictMode>,
);
