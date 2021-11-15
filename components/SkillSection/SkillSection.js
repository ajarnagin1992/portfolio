import React from "react";
import SkillCard from "./SkillCard";

const skills = [
  "Javascript",
  "React",
  "Angular",
  "C#",
  "Python",
  "Elm",
  "Haskell",
  "Azure",
  "Apache",
  "MySQL",
  "Node",
];

function SkillSection() {
  return (
    <div className="grid grid-cols-4 grid-flow-row">
      {skills.map((value) => {
        const myicon = `public/icons/${value}.svg`;
        return <SkillCard icon={myicon} skillName={value} />;
      })}
    </div>
  );
}

export default SkillSection;
