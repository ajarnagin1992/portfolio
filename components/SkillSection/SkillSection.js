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
      {skills.map((skill) => {
        return <SkillCard key={skill} icon="" skillName={skill} />;
      })}
    </div>
  );
}

export default SkillSection;
