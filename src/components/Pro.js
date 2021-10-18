import React from "react";

function Pro(project) {
  return (
    <div className="pro">
      <div className="proBody">
        <img className="proImg" src={project.img} alt="img" />
        <h4 className="proHead">
          <a href={project.link} target="blank">
            {project.name}
          </a>
        </h4>
        <p className="proDes">{project.des}</p>
      </div>
    </div>
  );
}

export default Pro;
