import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, Setactive] = useState("");

  useEffect(() => {
    let CurrentURL = window.location.href;
    console.log(CurrentURL);
    if (CurrentURL.endsWith("/")) {
      Setactive("About");
    } else if (CurrentURL.endsWith("/projects")) {
      Setactive("Projects");
    } else if (CurrentURL.endsWith("/skills")) {
      Setactive("Skills");
    }
  });

  return (
    <div className="Navbar">
      <div className="active">{active}</div>
      <div className="NavItems">
        {active !== "About" && (
          <Link
            to="/about"
            className="NavItem p-2 NavItem float-right"
            onClick={() => Setactive("About")}
          >
            About
          </Link>
        )}
        {active !== "Skills" ? (
          <Link
            to="/skills"
            className="NavItem p-2 NavItem float-right"
            onClick={() => Setactive("Skills")}
          >
            Skills
          </Link>
        ) : null}

        {active !== "Projects" && (
          <Link to="/projects">
            <div
              className="NavItem p-2 NavItem float-right"
              onClick={() => Setactive("Projects")}
            >
              Projects
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
