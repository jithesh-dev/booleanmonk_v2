import * as React from "react";
// import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Hero from "components/Hero";
import About from "components/About";
import Featured from "components/Featured";
import OtherProjects from "components/OtherProjects";
import Contact from "components/Contact";
import Head from "components/Head";

const IndexPage = () => {
  // const query = graphql`
  //   query MyQuery {
  //     allStrapiBlog {
  //       nodes {
  //         data {
  //           id
  //         }
  //       }
  //     }
  //   }
  // `;
  return (
    <>
      {/* <StaticQuery
        query={query}
        render={(data) => ( */}
      <Layout>
        <Head title="Home" />
        <Hero />
        <About />
        <Featured />
        <OtherProjects />
        <Contact />
        {/* <h1>{data.allStrapiBlog.nodes[0].data[0].id}</h1> */}
      </Layout>
      {/* )}
      /> */}
    </>
  );
};

export default IndexPage;
