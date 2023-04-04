import "./global-styles/global.css";

import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Page404 from "./pages/Page404";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
