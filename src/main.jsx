import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Technologies from './Technologies/Technologies.jsx';
import Stacks from './Stacks/Stacks.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}/>
        <Route path="/technologies/all" element={<Technologies />}/>
        <Route path="/stacks" element={<Stacks />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
