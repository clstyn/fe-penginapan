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
import { TambahProperti } from "./pages/TambahProperti";
import { EditProperti } from "./pages/EditProperti";
import { ForgotPassword } from "./pages/ForgotPassword";

import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Router>
        <AppProvider>
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
            <Route path="/tambahkost" element={<TambahProperti />} />
            <Route path="/editkost" element={<EditProperti />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </AppProvider>
      </Router>
    </>
  );
}

export default App;
