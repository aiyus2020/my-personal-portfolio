import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
          </ul>
        </article>
        {/*---end of UI/UX------*/}

        <article className="services">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
          </ul>
        </article>
        {/*------END OF WEBDEV-------*/}

        <article className="services">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
          </ul>
        </article>
        {/*-------end of content creation--------*/}
      </div>
    </section>
  );
};

export default Services;
