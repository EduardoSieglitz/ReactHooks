import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/Home';
import Atividade1 from './pages/atividades/atividade1';
import Atividade2 from './pages/atividades/atividade2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Web() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/atividade1" element={<Atividade1 />} />
          <Route path="/atividade2" element={<Atividade2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Web />)