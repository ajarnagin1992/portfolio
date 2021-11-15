import React from "react";

function SkillCard({ key, icon, skillName }) {
  return (
    <div key={key} className="p-4 flex flex-col">
      <div key={key}>{icon}</div>
      <div key={key}>{skillName}</div>
    </div>
  );
}

export default SkillCard;
