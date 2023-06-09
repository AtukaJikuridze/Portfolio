import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import Contact from "./pages/Contact/Contact";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Portfolio">
          <Route index element={<Home />} />
          <Route path="Projects" element={<ProjectsPage />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
