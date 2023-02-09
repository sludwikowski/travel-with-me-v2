import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import AppThemeProvider from './themes/AppThemeProvider';
import App from './App';

import { store } from './app/store';

import './main.css';
import { UserContextProvider } from './contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
);
