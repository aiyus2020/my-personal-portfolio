import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container  about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <article>
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
            </div>
            <div className="about__card">
              <article>
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>
            </div>
            <div className="about__card">
              <article>
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            nulla deleniti atque saepe soluta, delectus accusantium voluptatem
            iste ipsum rerum libero corrupti neque! Nisi cupiditate odio sunt
            officia, veniam totam.
          </p>

          <a href="#contact" className="btn btn-primary"> Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
