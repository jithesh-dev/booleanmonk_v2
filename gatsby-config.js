/** @type {import('gatsby').GatsbyConfig} */

module.exports = {
  siteMetadata: {
    title:
      "Boolean Monk - Freelance Web Developer and UI/UX Designer in Nottingham",
    author: "Jithesh Kumar",
    description:
      "Hello, I am Jithesh Kumar, Creative front end software developer and data driven user experiance designer.",
    url: "http://www.booleanmonk.com",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          {
            name: "blog",
            endpoint: "api/blogs",
            api: {
              qs: {
                populate: "featuredImage",
              },
            },
          },
        ],
        // singleTypes: [`home-page`, `contact`],
      },
    },
    `gatsby-plugin-tsconfig-paths`,
  ],
};
/** collectionTypes: [
    {
      name: "your_type_name_here",
      endpoint: "api/your_type_name_endpoint_here",
      api: {
        qs: {
          populate: "*"
        }
      }
    }
  ], */
