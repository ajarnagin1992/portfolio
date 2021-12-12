import { StyledHeader } from "components/Generic";
import React from "react";
import { skills } from "./skills";

function SkillSection() {
  return (
    <SkillSectionContainer>
      {skills.map((skill) => {
        return (
          <SkillCard
            key={skill.key}
            icon={<skill.Component className="h-6 w-6 md:h-8 md:w-8" />}
            title={skill.title}
          />
        );
      })}
    </SkillSectionContainer>
  );
}

function SkillSectionContainer(props) {
  return (
    <div className="flex flex-col">
      <StyledHeader>Skills</StyledHeader>
      <div className="m-auto grid grid-flow-row grid-cols-2 md:grid-cols-6 gap-1">
        {props.children}
      </div>
    </div>
  );
}

function SkillCard({ icon, title }) {
  return (
    <div className="p-3 flex flex-row items-center space-x-4 bg-background rounded">
      <div>{icon}</div>
      <div className="text-sm md:text-base">{title}</div>
    </div>
  );
}

export default SkillSection;
