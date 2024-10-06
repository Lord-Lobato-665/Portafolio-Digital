import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
/* import Home from "./screens/Home"; */
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Skills from "./screens/Skills";

function App() {
  return (
    <>
      <Router>

        <Routes>

          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />

        </Routes>

      </Router>
    </>
  );
}

export default App;
