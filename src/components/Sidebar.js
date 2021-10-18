import React from "react";
import Instagram from "../assets/icons/Instagram.png";
import facebook from "../assets/icons/facebook.png";
import linkedin from "../assets/icons/linkedin.png";
import twitter from "../assets/icons/twitter.png";
import github from "../assets/icons/github.png";
import pin from "../assets/icons/pin.png";
import Image from "../assets/icons/Image.jpg";
import gmail from "../assets/icons/gmail.png";

function Sidebar() {
  const handleEmailMe = () => {
    window.open("mailto:tripathialkesh6@gmail.com");
  };
  return (
    <div>
      <img src={Image} alt="image" className="sidebarImg" />
      <br />
      <div className="sidebarName">
        Alkesh <span>Tripathi</span>
      </div>
      <div className="sidebarItem">
        Student at Shri Ramdeobaba College of Engineering and Management ,Nagpur
      </div>
      <br />
      <figure>
        <a href="https://www.instagram.com/alkesh.tripathi21/" target="blank">
          <img src={Instagram} width="30" height="24" alt="instagram" />
        </a>

        <a href="https://twitter.com/AlkeshT21" target="blank">
          <img src={twitter} width="30" height="24" alt="twitter" />
        </a>

        <a href="https://www.facebook.com/alkesh.tripathi.589" target="blank">
          <img src={facebook} width="30" height="24" alt="facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/alkesh-tripathi-953a20205/"
          target="blank"
        >
          <img src={linkedin} width="30" height="24" alt="linkdln" />
        </a>
        <a href="https://github.com/Alkesh6" target="blank">
          <img src={github} width="30" height="24" alt="git" />
        </a>
      </figure>
      <div className="sidebarLocation">
        <img src={pin} width="24" height="24" alt="pin" />
        Nagpur,India
      </div>
      <div className="sidebarContact">
        <img src={gmail} width="20" height="20" alt="email" />
        <span>tripathialkesh6@gmail.com</span>
      </div>
      <div type="submit" className="sidebarEmail" onClick={handleEmailMe}>
        Email Me
      </div>
    </div>
  );
}

export default Sidebar;
