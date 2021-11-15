import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "./skills";

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
