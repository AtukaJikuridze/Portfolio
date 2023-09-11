import "./Project.css";
interface ProjectProps {
  madeWith: Array<string>;
  title: string;
  image?: string;
  live: string;
  github: string;
  setIsOpen: Function;
  
}
import { FaRegClone } from "react-icons/fa";

export default function Project({
  madeWith,
  title,
  image,
  live,
  github,
  setIsOpen,

}: ProjectProps) {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="project">
      {image ? <img src={image} alt="" /> : null}
      <div className="made-with">
        {madeWith.map((e: string, i: number) => (
          <p key={i}>{e}</p>
        ))}
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>Github servers hosting </p>
        <div className="project-buttons">
          <button onClick={() => openInNewTab(live)}>Live {"<~>"}</button>
          <button onClick={() => openInNewTab(github)}>Github {">="}</button>
          <FaRegClone
            onClick={() => {
              setIsOpen(true);
      
            }}
          />
        </div>
      </div>
    </div>
  );
}
