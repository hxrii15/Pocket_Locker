import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { VaultProvider } from './context/VaultContext.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VaultProvider>
          <App />
          <Toaster
            position="top-right"
            toastOptions={{
              className: 'ghost-toast',
              duration: 3500,
            }}
          />
        </VaultProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
