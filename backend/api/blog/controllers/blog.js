const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async likePost(ctx) {
    // const { id } = ctx.params;
    const { id, UserId } = ctx.request.body;
    const blog = await strapi.services.blog.findOne({ id });
    ctx.state.user = await strapi.plugins[
      "users-permissions"
    ].services.user.fetchAuthenticatedUser(UserId);

    if (blog) {
      if (
        blog.likedUser.find((like) => like.username === ctx.state.user.username)
      ) {
        // blog already liked unlike it
        blog.likedUser = blog.likedUser.filter(
          (like) => like.username !== ctx.state.user.username
        );
        entity = await strapi.services.blog.update({ id }, blog);
      } else {
        // Not liked
        blog.likedUser = [...blog.likedUser, ctx.state.user];
        entity = await strapi.services.blog.update({ id }, blog);
      }
    } else {
      return ctx.request(null, [{ messages: [{ id: "No blogs found" }] }]);
    }

    return sanitizeEntity(entity, { model: strapi.models.blog });
  },
};
