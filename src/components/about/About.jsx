import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import ME1 from "../../assets/me-about-1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFolderSettingsLine } from "react-icons/ri";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME1} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>95+ Worldwide</small>
            </article>
            <article className="about__card">
              <RiFolderSettingsLine className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima
            vitae, beatae dolores laboriosam eaque quaerat totam commodi atque
            fugiat at incidunt ab hic culpa?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
