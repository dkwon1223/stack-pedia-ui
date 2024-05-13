import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Technologies from "./Components/Technologies.jsx";
import TechnologyDetails from "./Components/TechnologyDetails.jsx";
import Stacks from "./Components/Stacks.jsx";
import StackDetails from "./Components/StackDetails.jsx";
import Signup from "./Components/Signup.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import "./index.css";
import SignIn from "./Components/SignIn.jsx";
import Favorites from "./Components/Favorites.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/technologies/:id" element={<TechnologyDetails />} />
          <Route path="/stacks" element={<Stacks />} />
          <Route path="/stacks/:id" element={<StackDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
