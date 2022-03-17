import React, { FC } from "react";
import Carousel from "react-elastic-carousel";
import classNames from "classnames";
import featuredProjects from "data/projects";
import * as styles from "./styles.module.scss";
import ProjectTile from "components/ProjectTile";
import "./glider.css";

const Featured: FC = () => {
  return (
    <div id="works" className={styles.works}>
      <div className={styles.worksExpWrapper}>
        <h1 className={classNames("expander", styles.worksExp)}>WORKS</h1>
      </div>
      <h5>FEATURED PROJECTS</h5>
      <div className={styles.projectContainer}>
        <Carousel
          isRTL={false}
          pagination={false}
          className={styles.divCarousel}
        >
          {featuredProjects.map((project) => (
            <ProjectTile
              key={project.id}
              counter={project.id}
              image={project.image}
              projectTitle={project.title}
              url={project.url}
              description={project.description}
              stack={project.stack}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Featured;
