import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/props';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Web() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Web/>)



