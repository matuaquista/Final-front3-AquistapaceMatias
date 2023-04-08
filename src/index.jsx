import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Footer from "./Components/Footer";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./Components/Contact";
import DetailCard from "./Components/DetailCard";
import Favourites from "./Routes/Favourites";
import { ContextProvider } from "./Components/utils/global.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dentist/:id" element={<DetailCard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="destacados" element={<Favourites />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
