import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import customTheme from './theme/theme';
import { Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createAppStore } from './state/Store';

export const redux = createAppStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={redux.store}>
      <PersistGate loading={null} persistor={redux.persistor}>
        <ThemeProvider theme={customTheme}>
          <App />
        </ThemeProvider>
        </PersistGate>
    </Provider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
