import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Detail } from './pages/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/employee/:id" element={<Detail/>}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
