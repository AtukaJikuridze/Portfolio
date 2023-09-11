import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import Contact from "./pages/Contact/Contact";
import { useEffect, useState } from "react";
import CloneRepository from "./components/CloneRepository/CloneRepository";

export function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [currentIndex, setProjectIndex] = useState(0);

  return (
    <div className={"App"}>
      <Navbar />
      <CloneRepository
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        https={""}
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
