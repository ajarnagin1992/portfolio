import React from "react";
import { skills } from "./skills";

function SkillSection() {
  return (
    <SkillSectionContainer>
      {skills.map((skill) => {
        return (
          <SkillCard
            key={skill.key}
            icon={<skill.Component className="h-10 w-10" />}
            title={skill.title}
          />
        );
      })}
    </SkillSectionContainer>
  );
}

function SkillSectionContainer(props) {
  return (
    <div className="flex flex-col max-w-3xl m-auto pt-28">
      <h1 className="text-5xl p-10">Skills</h1>
      <div className="grid grid-flow-row grid-cols-3 md:grid-cols-4">
        {props.children}
      </div>
    </div>
  );
}

function SkillCard({ key, icon, title }) {
  return (
    <div key={key} className="p-4 flex flex-row items-center space-x-4">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
}

export default SkillSection;