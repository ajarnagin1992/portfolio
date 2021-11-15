import React from "react";
import { skills } from "./skills";

function SkillCard({ key, icon, skillName }) {
  return (
    <div key={key} className="p-4 flex flex-col">
      <div>{icon}</div>
      <div>{skillName}</div>
    </div>
  );
}

function SkillSection() {
  return (
    <div className="grid grid-cols-4 grid-flow-row">
      {skills.map((skill) => {
        return <SkillCard key={skill.key} icon="" skillName={skill.title} />;
      })}
    </div>
  );
}

export default SkillSection;
