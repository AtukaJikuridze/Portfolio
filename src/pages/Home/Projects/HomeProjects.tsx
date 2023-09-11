import { Link } from "react-router-dom";
import "./HomeProjects.css";
import ProjectsList from "./ProjectsList/ProjectsList";
import { SectionTitle } from "../../../components/SectionTitle";
interface projectsPage {
  setIsOpen: Function;
  setCloneInfo: Function;
}
export default function HomeProjects({
  setIsOpen,
  setCloneInfo,
}: projectsPage) {
  return (
    <div className="home-projects">
      <div className="container">
        <div className="home-projects-header">
          <div className="projects-header-flex">
            <SectionTitle title="projects" />
            <Link to={"/Portfolio/Projects"}>View All {"~~>"}</Link>
          </div>
        </div>
        <ProjectsList setIsOpen={setIsOpen} setCloneInfo={setCloneInfo} />
      </div>
    </div>
  );
}
