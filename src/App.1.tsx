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
  const [cloneInfo, setCloneInfo] = useState<any>(null);
  console.log(cloneInfo);

  return (
    <div className={"App"}>
      <Navbar />
      <CloneRepository
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        https={cloneInfo?.https}
        ssh={cloneInfo?.ssh}
        cli={cloneInfo?.ssh}
        title={cloneInfo}
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
