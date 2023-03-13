import React from "react";
import TwitterIcon from "../images/Twitter Icon.png";
import FacebookIcon from "../images/Facebook Icon.png";
import InstagramIcon from "../images/Instagram Icon.png";
import GithubIcon from "../images/GitHub Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={TwitterIcon} alt="twitter" />
      <img src={FacebookIcon} alt="facebook" />
      <img src={InstagramIcon} alt="instagram" />
      <img src={GithubIcon} alt="Github" />
    </div>
  );
}
