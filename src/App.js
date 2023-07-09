import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AdminPage } from "./pages/AdminPage";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { MyProperty } from "./pages/MyProperty";
import { Peta } from "./pages/Peta";
import { Page404 } from "./pages/Page404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-property" element={<MyProperty />} />
        <Route path="/maps" element={<Peta />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
