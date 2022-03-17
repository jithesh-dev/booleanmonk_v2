import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import Monk from "assets/svg/monk.svg";
import * as styles from "./styles.module.scss";

const Hero = () => {
  return (
    <>
      <div className={styles.heroGrid}>
        <div className={styles.monkIllustration}>
          <img src={Monk} alt="" className={styles.monk} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Be At Peace</h1>

          <h3 className={styles.subTitle}>
            YOU HAVE FOUND YOUR NEW WEB PARTNER!
          </h3>
          <Link to="#contact" className={classNames("btn", styles.hCta)}>
            Get in Touch
          </Link>
        </div>
        <div className={styles.introTextWrapper}>
          <p className={classNames("highlight", styles.introText)}>
            Full stack developer with an eye for clean design.
          </p>
        </div>
        <span className={styles.scrollText}>SCROLL</span>
      </div>
      <div className="hello-container">
        <h1 className="hello-exp expander vertical uppercase">hello</h1>
      </div>
    </>
  );
};

export default Hero;
