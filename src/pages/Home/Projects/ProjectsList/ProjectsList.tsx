import { ProjectsAPI } from "../../../../API/ProjectsAPI";
import Project from "../../../../components/Project/Project";
import "./ProjectsList.css";
export default function ProjectsList() {
  return (
    <div className="project-list">
      {ProjectsAPI.map((e) => (
        <Project />
      ))}
    </div>
  );
}
