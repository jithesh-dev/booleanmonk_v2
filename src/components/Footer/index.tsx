import React, { FC } from "react";
import classNames from "classnames";
import * as styles from "./syles.modules.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <h5 className={classNames("uppercase", styles.fDesc)}>Boolean Monk</h5>
      <h6 className={classNames("uppercase", styles.fDesc)}>
        WEB DEVELOPER FREELANCER IN NOTTINGHAM
      </h6>
    </footer>
  );
};

export default Footer;
