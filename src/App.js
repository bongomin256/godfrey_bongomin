import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navBar/Navbar";
import Footer from "./component/footer/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
