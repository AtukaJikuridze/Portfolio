import { ProjectsAPI } from "../../../../API/ProjectsAPI";
import Project from "../../../../components/Project/Project";
import "./ProjectsList.css";
export default function ProjectsList() {
  return (
    <div className="project-list">
      {ProjectsAPI.completedProjects.slice(0, 4).map((e, i) => (
        <Project
          key={i}
          madeWith={e.madeWith}
          title={e.title}
          image={e.image}
          live={e.live}
          github={e.github}
        />
      ))}
    </div>
  );
}
