import React from "react";
import { Link } from "gatsby";
import Logo from "assets/svg/bm-logo.svg";

import * as styles from "./styles.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.navbar}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="" />
        </Link>
        <nav className="nav">
          <Link to="/#about" className={styles.nav__link}>
            about
          </Link>
          <Link to="/#works" className={styles.nav__link}>
            works
          </Link>
          <Link to="/#contact" className={styles.nav__link}>
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
