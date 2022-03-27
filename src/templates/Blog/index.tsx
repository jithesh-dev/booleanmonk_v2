import { graphql } from "gatsby";
import React, { FC } from "react";

export interface IBlog {}

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { path: { eq: $slug } }) {
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         thumbnail {
//           childImageSharp {
//             fluid(quality: 80, maxWidth: 1920) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//       html
//     }
//   }
// `;

const Blog: FC<IBlog> = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
};

export default Blog;
