import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import HomeProjects from "./Projects/HomeProjects";
import Skills from "./Skills/Skills";
interface projectsPage {
  setIsOpen: Function;
  setCloneInfo: Function;
}
export default function Home({ setIsOpen, setCloneInfo }: projectsPage) {
  return (
    <div>
      <Header />
      <HomeProjects setIsOpen={setIsOpen} setCloneInfo={setCloneInfo} />
      <Skills />/
      <About />
      <Contact />
    </div>
  );
}
