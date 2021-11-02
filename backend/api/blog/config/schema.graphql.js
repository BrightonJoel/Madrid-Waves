module.exports = {
  definition: ``,
  query: ``,
  type: {},
  mutation: `
  likePost(id: ID, UserName: String): Blog!
    `,
  resolver: {
    Query: {},
    Mutation: {
      likePost: {
        description: "Assign a product to a category",
        resolverOf: "application::blog.blog.likePost",
        resolver: "application::blog.blog.likePost",
      },
    },
  },
};
