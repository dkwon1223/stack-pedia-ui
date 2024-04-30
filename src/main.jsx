import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Technologies from "./Components/Technologies.jsx";
import TechnologyDetails from "./Components/TechnologyDetails.jsx";
import Stacks from "./Components/Stacks.jsx";
import StackDetails from "./Components/StackDetails.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/technology/:id" element={<TechnologyDetails />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/stack/:id" element={<StackDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
