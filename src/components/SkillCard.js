import React from "react";

function SkillCard(skill) {
  return (
    <div className="col-lg-6">
      <div className="skillCard">
        <div className="skillBody">
          <img src={skill.icon} className="skillIcon" alt="icon" />
          <h6 className="skillTitle">{skill.tittle}</h6>
          <p className="skillAbout">{skill.about}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
