import ReactDOM from 'react-dom/client';
import Atividade1 from './pages/atividades/atividade1.js';
import Home from './pages/home/Home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Web() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/atividade1" element={<Atividade1 />} />
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Web />)