import React from "react";
import classNames from "classnames";

import ProfilePic from "assets/images/profile-pic.webp";
import * as styles from "./styles.module.scss";

const About = () => {
  return (
    <div
      id="about"
      className={classNames(
        "section",
        "container",
        "sub-container",
        styles.aboutGrid
      )}
    >
      <h1 className={classNames(styles.aboutExpander, "expander")}>ABOUT ME</h1>

      <div className={styles.profPicContainer}>
        <img src={ProfilePic} alt="" />
      </div>
      <div className={styles.aContent}>
        <h5 className="section-headings">JITHESH KUMAR</h5>
        <p>
          A Creative Freelance Full Stack Developer / Designer with 9+ years of
          industry experince with a passion for interactive design and
          development. I am currently based in Nottingham working on freelance
          web projects.
        </p>
        <p>
          During my early years, I was working as a Senior Test Engineer (Team
          Lead) for the biggest IT Company in India. Out of passion for coding,
          I moved on to freelancing web projects and started my development
          career in Laravel and Mysql. Since 2016, I have worked on various web
          technologies like - React, Gatsby, Django, Node, MySQL, Postgres and
          the list goes on. I have had to work across multiple roles including
          Backend development, Front End development and UI/UX design but
          lately, my interest has gotten more to do with interactive design and
          front-end implementation specializing in React.
        </p>
        <p>
          I am also a professional photographer specializing in weddings and
          have tried playing around with portrait photography.
        </p>
      </div>
    </div>
  );
};

export default About;
