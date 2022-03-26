import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
export interface IHead {
  title: string;
}

const Head: FC<IHead> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          url
        }
      }
    }
  `);
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      {data.site.siteMetadata.description && (
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
      )}

      <meta property="og:url" content={data.site.siteMetadata.url} />
    </Helmet>
  );
};

export default Head;
