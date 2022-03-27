const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/Blog/index.tsx`);
  const result = await graphql(
    `
      {
        allStrapiBlog {
          nodes {
            data {
              attributes {
                title
                slug
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    );
    return;
  }

  // Create blog posts pages.
  const posts = result.data.allStrapiBlog.nodes[0].data;
  console.dir(posts);

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    createPage({
      path: `blog/${post.attributes.slug}`,
      component: blogPost,
      context: {
        slug: post.attributes.slug,
        previous,
        next,
      },
    });
  });
};

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `Mdx`) {
//     const value = createFilePath({ node, getNode });
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     });
//   }
// };
