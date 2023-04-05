import Project from "../../components/Project/Project";
import { SectionTitle } from "../../components/SectionTitle";
import "./ProjectsPage.css";
export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h2>
            <span>/</span>projects
            <p>List of my projects</p>
          </h2>
        </div>
        <SectionTitle title="completed-project" />
        <div className="completed-projects projects-main">
          <Project />
        </div>
      </div>
    </div>
  );
}
