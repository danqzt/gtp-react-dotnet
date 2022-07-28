import logo from './logo.svg';
import './App.scss';
import { Home } from './pages/Home';
import { EmployeeDetail } from './pages/EmployeeDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TitleProvider } from './state/TitleProvider';
import { ErrorBoundary } from './helpers/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary key="443432">
      <TitleProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/employees/:id" element={<EmployeeDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TitleProvider>
    </ErrorBoundary>
  );
}

export default App;
