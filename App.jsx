import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Products from "./pages/Products";
import Yoga from "./pages/Yoga";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookConsultation from "./pages/BookConsultation";
import ConfirmBooking from "./pages/ConfirmBooking";



const App = () => {
  return (
    <BrowserRouter>

    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<BookConsultation />} />
        <Route path="/confirm" element={<ConfirmBooking />} />
      </Routes>


    <Footer/>
    </BrowserRouter>
  );
};

export default App;