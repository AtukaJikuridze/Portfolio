import React from "react";
interface skillsInterface {
  title: string;
  list: Array<string>;
}
export default function Skill({ title, list }: skillsInterface) {
  console.log(list);

  return (
    <div className="skill">
      <h3>{title}</h3>
      <div className="info-list">
        {list.map((e, i) => (
          <>
            <p key={i}>
              {e}
              {i === list.length - 1 ? "" : ","}
            </p>
          </>
        ))}
      </div>
    </div>
  );
}
