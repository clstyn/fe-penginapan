import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AdminPage } from "./pages/AdminPage";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { MyProperty } from "./pages/MyProperty";
import { PetaPenginapan } from "./pages/PetaPenginapan";
import { PetaJalurEvakuasi } from "./pages/PetaJalurEvakuasi";
import { Page404 } from "./pages/Page404";
import { CobaFirebase } from "./pages/CobaFirebase";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-property" element={<MyProperty />} />
        <Route path="/maps-penginapan" element={<PetaPenginapan />} />
        <Route
          path="/maps-rekomendasi-evakuasi"
          element={<PetaJalurEvakuasi />}
        />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/coba" element={<CobaFirebase />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
