import logo from './logo.svg';
import './App.scss';
import { Home } from './pages/Home';
import { EmployeeDetail } from './pages/EmployeeDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { ErrorBoundary } from './helpers/ErrorBoundary';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { ApiSlice } from './state/ApiSlice';

function App() {
  return (
    <ErrorBoundary key="443432">
      <ApiProvider api={ApiSlice}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/employees/:id" element={<EmployeeDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </ErrorBoundary>
  );
}

export default App;
