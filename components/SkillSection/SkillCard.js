import React from "react";

function SkillCard({ icon, skillName }) {
  return (
    <div className="p-4 flex flex-col">
      <div>{icon}</div>
      <div>{skillName}</div>
    </div>
  );
}

export default SkillCard;
