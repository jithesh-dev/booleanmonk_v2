import React, { FC } from "react";
import * as styles from "./styles.module.scss";

export interface IBlogList {
  blogs: [
    {
      id: string;
      slug: string;
      title: string;
      featuredImageUrl: string;
    }
  ];
}

const BlogList: FC<IBlogList> = ({ blogs }) => {
  return (
    <div className={styles.blogList}>
      {blogs.map((item, index) => (
        <div className={styles.blogItem} key={index}>
          <img src={item.featuredImageUrl} width="500" alt="" />
          <a href={"/blog/" + item.slug}>
            <h4>{item.title}</h4>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
