import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Head from "components/Head";
import BlogList from "components/BlogList";

const IndexPage = () => {
  const { allStrapiBlog } = useStaticQuery(
    graphql`
      query MyQuery {
        allStrapiBlog {
          nodes {
            data {
              id
              attributes {
                title
                slug
                featuredImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const [data, setData] = useState();
  useEffect(() => {
    if (allStrapiBlog?.nodes[0]?.data) {
      const blogData = allStrapiBlog.nodes[0].data.map((item: any) => ({
        id: item.id,
        slug: item.attributes.slug,
        title: item.attributes.title,
        featuredImageUrl:
          `http://localhost:1337` +
          item.attributes.featuredImage.data.attributes.url,
      }));
      setData(blogData);
    }
  }, [allStrapiBlog]);

  return (
    <>
      <Layout>
        <Head title="Blog" />
        {data && <BlogList blogs={data} />}
      </Layout>
    </>
  );
};

export default IndexPage;
