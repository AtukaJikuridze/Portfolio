import ContactBox from "../../components/ContactBox/ContactBox";
import "./Contact.css";
import AllMedia from "./AllMedia";
import { useEffect } from "react";
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

            <div className="contact-experience">
              <p>
                <strong>📍 Experience:</strong>
              </p>
              <br />

              <p>
                <strong>Freelance Front-End Developer</strong> (September 2023 –
                February 2025, Tbilisi, Georgia)
              </p>
              <p>- Built and maintained multiple client projects</p>
              <p>
                - Created interactive and responsive user interfaces using React
                & TypeScript
              </p>
              <br />
              <p>
                <strong>Next.js Developer at Mentor </strong> (March 2025 –
                Present)
              </p>
              <p>
                - Responsible for maintaining and developing the company website
              </p>
              <p>
                - Implemented new features for the platform as the startup
                entered a new phase
              </p>
              <p>
                - Collaborated closely with the team to ensure smooth deployment
                and scalability
              </p>
            </div>
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
