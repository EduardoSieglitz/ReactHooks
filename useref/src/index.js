import ReactDOM from 'react-dom/client';
import Home from './App.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Web() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Web />)