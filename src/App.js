import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Offers from "./pages/Offers";
import Help from "./pages/Help";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="soko">
      <Navbar />
      <Home />
      <Category />
      <Offers />
      <Help />
      <About />
      <Contact />
    </div>
  );
}

export default App;
