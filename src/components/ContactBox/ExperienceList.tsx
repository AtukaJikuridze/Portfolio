export default function ExperienceList() {
  return (
    <div className="contact-experience">
      <p>
        <strong>📍 Experience:</strong>
      </p>
      <br />

      <ExperienceItem
        title="Co Founder | Front End Developer at OnService"
        date="April 2025 – Present"
        points={[
          "Developed a responsive dashboard using React and Tailwind CSS",
          "Worked on real-time data integration and UI state management using Zustand",
          "Improved overall user experience and accessibility of the platform",
        ]}
      />

      <ExperienceItem
        title="Next.js Developer at Mentor"
        date="March 2025 – Present"
        points={[
          "Responsible for maintaining and developing the company website",
          "Implemented new features for the platform as the startup entered a new phase",
          "Collaborated closely with the team to ensure smooth deployment and scalability",
        ]}
      />

      <ExperienceItem
        title="Freelance Front-End Developer"
        date="September 2023 – February 2025, Tbilisi, Georgia"
        points={[
          "Built and maintained multiple client projects",
          "Created interactive and responsive user interfaces using React & TypeScript",
        ]}
      />
    </div>
  );
}
function ExperienceItem({
  title,
  date,
  points = [],
}: {
  title: string;
  date?: string;
  points?: string[];
}) {
  return (
    <div className="experience-item">
      <p>
        <strong>{title}</strong> {date && `(${date})`}
      </p>
      {points.map((point, index) => (
        <p key={index}>- {point}</p>
      ))}
      <br />
    </div>
  );
}
