import React, { FC } from "react";
import otherworks_00 from "../../assets/images/other_works/otherworks_00.webp";
import otherworks_01 from "../../assets/images/other_works/otherworks_01.webp";
import otherworks_02 from "../../assets/images/other_works/otherworks_02.webp";
import otherworks_03 from "../../assets/images/featured/amazone_clone.webp";
import otherworks_04 from "../../assets/images/other_works/otherworks_04.webp";

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import classNames from "classnames";
import * as styles from "./styles.module.scss";

const OtherProjects: FC = () => {
  const options = {
    buttons: {
      showDownloadButton: false,
      showAutoplayButton: false,
    },
  };
  return (
    <div className={classNames("o-projects-grid", "section", "container")}>
      <h5 className="section-headings">OTHER PROJECTS</h5>
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          <div className={styles.projectContainer}>
            <img src={otherworks_00} alt="" className={styles.opTile} />

            <img src={otherworks_01} alt="" className={styles.opTile} />

            <img src={otherworks_02} alt="" className={styles.opTile} />

            <img src={otherworks_03} alt="" className={styles.opTile} />

            <img src={otherworks_04} alt="" className={styles.opTile} />
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
};

export default OtherProjects;
