import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import HomeProjects from "./Projects/HomeProjects";
import Skills from "./Skills/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeProjects />
      <Skills />/
      <About />
      <Contact />
    </div>
  );
}
