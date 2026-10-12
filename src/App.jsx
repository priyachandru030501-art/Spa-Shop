
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Service from "./components/Service";
import Package from "./components/Package";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter basename="/Spa-Shop">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/package" element={<Package />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
