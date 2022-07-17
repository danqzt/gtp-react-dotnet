import logo from './logo.svg';
import './App.scss';
import { Home } from './pages/Home';
import { EmployeeDetail } from './pages/EmployeeDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/employees/:id" element={<EmployeeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
