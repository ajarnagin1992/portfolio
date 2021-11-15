import React from "react";

function SkillCard({ key, icon, skillName }) {
  return (
    <div key={key} className="p-4 flex flex-col">
      <div>{icon}</div>
      <div>{skillName}</div>
    </div>
  );
}

export default SkillCard;
