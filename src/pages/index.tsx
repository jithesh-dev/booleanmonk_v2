import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Hero from "components/Hero";
import About from "components/About";
import Featured from "components/Featured";
import OtherProjects from "components/OtherProjects";
import Contact from "components/Contact";
// import Hero from "../components/Hero/Hero"
// import About from "../components/About/About"
// import Featured from "../components/Featured/Featured"
// import OtherProjects from "../components/OtherProjects/OtherProjects"
// import Contact from "../components/Contact/Contact"
// import SimpleReactLightbox from "simple-react-lightbox"
// import Head from "../components/Head/Head"
// markup
const IndexPage = () => {
  const query = graphql`
    query MyQuery {
      allStrapiBlog {
        nodes {
          data {
            id
          }
        }
      }
    }
  `;
  return (
    <>
      <StaticQuery
        query={query}
        render={(data) => (
          <Layout>
            <Hero />
            <About />
            <Featured />
            <OtherProjects />
            <Contact />
            {/* <h1>{data.allStrapiBlog.nodes[0].data[0].id}</h1> */}
          </Layout>
        )}
      />
    </>
  );
};

export default IndexPage;
