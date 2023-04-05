import React from "react";
interface skillsInterface {
  title: string;
  list: Array<string>;
}
export default function Skill({ title, list }: skillsInterface) {
  return (
    <div className="skill">
      <h3>{title}</h3>
      <div className="info-list">
        {list
          .join(",")
          .split(" ")
          .map((e, i) => (
            <p key={i}>{e}</p>
          ))}
      </div>
    </div>
  );
}
