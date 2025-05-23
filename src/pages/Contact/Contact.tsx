import ContactBox from "../../components/ContactBox/ContactBox";
import "./Contact.css";
import AllMedia from "./AllMedia";
import { useEffect } from "react";
import ExperienceList from "../../components/ContactBox/ExperienceList";
export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h2>
          <span>/</span>contacts
        </h2>
        <p className="header-p">who am i ?</p>

        <div className="my-info">
          <div className="my-info-leftside-main">
            <p>
              Hello, I’m Avto Jikuridze, a Front-End Developer with expertise in
              React and TypeScript. I have experience working on freelance
              projects and team-based applications, focusing on building
              scalable and performant web applications. I'm currently open to
              freelance opportunities, but if you have any other requests or
              questions, feel free to reach out!
            </p>

            <div className="contact-skills">
              <p>
                <strong>💻 Skills:</strong>
              </p>
              <p>
                <strong>Languages:</strong> TypeScript, JavaScript
              </p>
              <p>
                <strong>Frameworks & Libraries:</strong> React.js, Redux
                Toolkit, Next.js, jQuery , Zustand
              </p>
              <p>
                <strong>Tools:</strong> VSCode, Figma, Git, Github, Postman
              </p>
              <p>
                <strong>Learning:</strong> Node.js, Express.js, MongoDB, GraphQL
              </p>
              <p>
                <strong>Other:</strong> HTML, CSS, SCSS, Tailwind CSS, Styled
                Components, REST API, Firebase, ContextAPI
              </p>
            </div>

            <div className="contact-education">
              <p>
                <strong>🎓 Education:</strong>
              </p>
              <p>- SkillWill (Front-End Development) (Current)</p>
              <p>- IT Step Academy - Programming from Zero (Completed)</p>
            </div>

            <ExperienceList />
          </div>

          <ContactBox />
        </div>
        <h2>
          <span>/</span>all-media
        </h2>
        <AllMedia />
      </div>
    </div>
  );
}
