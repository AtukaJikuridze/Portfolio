import { ProjectsAPI } from "../../API/ProjectsAPI";
import CloneRepository from "../../components/CloneRepository/CloneRepository";
import Project from "../../components/Project/Project";
import { SectionTitle } from "../../components/SectionTitle";
import "./ProjectsPage.css";
interface projectsPage {
  setIsOpen: Function;
  setCloneInfo: Function;
}
export default function ProjectsPage({
  setIsOpen,
  setCloneInfo,
}: projectsPage) {
  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h2>
            <span>/</span>projects
            <p>List of my projects</p>
          </h2>
        </div>

        <SectionTitle title="onservice-projects" />

        <div className="team-projects projects-main">
          {ProjectsAPI.onserviceProjects.map((e, i) => (
            <Project
              setIsOpen={setIsOpen}
              key={i}
              madeWith={e.madeWith}
              title={e.title}
              image={e.image}
              live={e.live}
              github={e.github}
              setCloneInfo={setCloneInfo}
              cloneInfo={{
                title: e.title,
                clone: e.clone,
              }}
            />
          ))}
        </div>

        <SectionTitle title="completed-projects" />

        <div className="team-projects projects-main">
          {ProjectsAPI.completedProjects.map((e, i) => (
            <Project
              setIsOpen={setIsOpen}
              key={i}
              madeWith={e.madeWith}
              title={e.title}
              image={e.image}
              live={e.live}
              github={e.github}
              setCloneInfo={setCloneInfo}
              cloneInfo={
                e.clone !== null
                  ? {
                      title: e.title,
                      clone: e.clone,
                    }
                  : null
              }
            />
          ))}
        </div>

        <SectionTitle title="team-projects" />

        <div className="team-projects projects-main">
          {ProjectsAPI.teamProjects.map((e, i) => (
            <Project
              setIsOpen={setIsOpen}
              key={i}
              madeWith={e.madeWith}
              title={e.title}
              image={e.image}
              live={e.live}
              github={e.github}
              setCloneInfo={setCloneInfo}
              cloneInfo={{
                title: e.title,
                clone: e.clone,
              }}
            />
          ))}
        </div>

        <SectionTitle title="small-projects" />
        <div className="completed-projects projects-main">
          {ProjectsAPI.smallProjects.map((e, i) => (
            <Project
              setIsOpen={setIsOpen}
              key={i}
              madeWith={e.madeWith}
              title={e.title}
              live={e.live}
              github={e.github}
              setCloneInfo={setCloneInfo}
              cloneInfo={{
                title: e.title,
                clone: e.clone,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
