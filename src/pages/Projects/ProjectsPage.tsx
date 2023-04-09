import { ProjectsAPI } from "../../API/ProjectsAPI";
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

        <SectionTitle title="completed-projects" />

        <div className="team-projects projects-main">
          {ProjectsAPI.completedProjects.map((e) => (
            <Project
              madeWith={e.madeWith}
              title={e.title}
              image={e.image}
              live={e.live}
              github={e.github}
            />
          ))}
        </div>

        <SectionTitle title="team-projects" />

        <div className="team-projects projects-main">
          {ProjectsAPI.teamProjects.map((e) => (
            <Project
              madeWith={e.madeWith}
              title={e.title}
              image={e.image}
              live={e.live}
              github={e.github}
            />
          ))}
        </div>

        <SectionTitle title="small-projects" />
        <div className="completed-projects projects-main">
          {ProjectsAPI.smallProjects.map((e) => (
            <Project
              madeWith={e.madeWith}
              title={e.title}
              live={e.live}
              github={e.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
