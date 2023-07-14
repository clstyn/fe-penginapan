import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AdminPage } from "./pages/AdminPage";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { MyProperty } from "./pages/MyProperty";
import { PetaPenginapan } from "./pages/PetaPenginapan";
import { PetaJalurEvakuasi } from "./pages/PetaJalurEvakuasi";
import { PetaTikum } from "./pages/PetaTikum";
import { Page404 } from "./pages/Page404";
import { CobaFirebase } from "./pages/CobaFirebase";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Router>
        <AuthProvider>
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
            <Route path="/maps-rekomendasi-tikum" element={<PetaTikum />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/coba" element={<CobaFirebase />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
