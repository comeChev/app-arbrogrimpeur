import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import StickyNavbar from "./components/navigation/StickyNavbar";
import About from "./pages/About";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import Services from "./pages/Services/Services";
import TopButton from "./components/ui/buttons/TopButton";
import Contact from "./pages/Contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StickyNavbar />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:nameService" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <TopButton />
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
