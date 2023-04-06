import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/my img.jpg";
const Header = () => {
  return (
    <header id="#">
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>aiyus</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll_Down
        </a>
      </div>
    </header>
  );
};

export default Header;
