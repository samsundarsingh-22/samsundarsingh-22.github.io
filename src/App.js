import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Research from "./components/Research";
import Teaching from "./components/Teaching";

function App() {
  return (
    <Router>
      <nav className="bg-white shadow p-4 flex flex-wrap justify-center space-x-6">
        <Link to="/" className="text-blue-600 font-semibold hover:underline">Home</Link>
        <Link to="/about" className="text-blue-600 font-semibold hover:underline">About</Link>
        <Link to="/research" className="text-blue-600 font-semibold hover:underline">Research</Link>
        <Link to="/teaching" className="text-blue-600 font-semibold hover:underline">Teaching</Link>
        <Link to="/contact" className="text-blue-600 font-semibold hover:underline">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="bg-gray-100 text-center text-gray-600 py-4 mt-12 shadow-inner">
        © {new Date().getFullYear()} Sam Sundar Singh. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;