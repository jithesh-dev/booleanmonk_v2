import React, { FC } from "react";
import * as styles from "./styles.module.scss";

export interface IProjectTile {
  counter: string;
  image: any;
  projectTitle: string;
  url?: string;
  description: string;
  stack: string[];
}

const ProjectTile: FC<IProjectTile> = ({
  counter,
  image,
  projectTitle,
  url,
  description,
  stack,
}) => {
  return (
    <div className={styles.pTile}>
      <h4 className={styles.pTitle}>
        <span>{counter}</span>
        {projectTitle}
      </h4>
      <div className={styles.pImg}>
        <img src={image} alt="" />
      </div>
      <div className={styles.tileContent}>
        <p>{description}</p>
        <ul className={styles.highlight}>
          {stack?.map((element) => (
            <li>{element}</li>
          ))}
        </ul>

        {url && (
          <a target="_blank" rel="noreferrer" className="btn" href={url}>
            VIEW LIVE PROJECT
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectTile;
