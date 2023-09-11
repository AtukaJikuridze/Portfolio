import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import Contact from "./pages/Contact/Contact";
import { useEffect, useState } from "react";
import CloneRepository from "./components/CloneRepository/CloneRepository";
import { ProjectsAPI } from "./API/ProjectsAPI";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className={"App"}>
      <Navbar />
      <CloneRepository
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        https={"1"}
        ssh={""}
        cli={""}
      />
      <Routes>
        <Route path="/Portfolio">
          <Route index element={<Home />} />
          <Route
            path="Projects"
            element={<ProjectsPage setIsOpen={setIsOpen} />}
          />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
