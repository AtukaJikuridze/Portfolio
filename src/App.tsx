import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import Contact from "./pages/Contact/Contact";
import { useEffect, useState } from "react";
import CloneRepository from "./components/CloneRepository/CloneRepository";

function App() {
  const location = useLocation();
  const [cloneInfo, setCloneInfo] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <Navbar />
      <CloneRepository
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        https={`https://github.com/${cloneInfo?.clone}.git`}
        ssh={`git@github.com:${cloneInfo?.clone}.git`}
        cli={`gh repo clone ${cloneInfo?.clone}`}
        title={cloneInfo?.title}
      />
      <Routes>
        <Route path="/Portfolio">
          <Route
            index
            element={<Home setIsOpen={setIsOpen} setCloneInfo={setCloneInfo} />}
          />
          <Route
            path="Projects"
            element={
              <ProjectsPage setIsOpen={setIsOpen} setCloneInfo={setCloneInfo} />
            }
          />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
