import { Link } from "react-router-dom";
import "./HomeProjects.css";
import ProjectsList from "./ProjectsList/ProjectsList";

export default function HomeProjects() {
  return (
    <div className="home-projects">
      <div className="container">
        <div className="home-projects-header">
          <div className="projects-header-flex">
            <h2>
              <span>#</span>projects
              <span>--------------------------------------</span>
            </h2>
            <Link to={"/"}>View All {"~~>"}</Link>
          </div>
        </div>
        <ProjectsList />
      </div>
    </div>
  );
}
