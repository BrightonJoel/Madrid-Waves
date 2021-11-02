const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async likePost(ctx) {
    // const { id } = ctx.params;
    const { id, UserName } = ctx.request.body;
    const blog = await strapi.services.blog.findOne({ id });

    if (blog) {
      if (blog.likes.find((like) => like.UserName === UserName)) {
        // blog already liked unlike it
        await strapi.services.like.delete({ UserName });

        blog.likes = blog.likes.filter((like) => like.UserName !== UserName);
        entity = await strapi.services.blog.update({ id }, blog);
      } else {
        // Not liked
        let newLike = {
          UserName,
          blog: `${blog.id}`,
        };
        await strapi.services.like.create(newLike);
        entity = await strapi.services.blog.findOne({ id });
      }
    } else {
      return ctx.request(null, [{ messages: [{ id: "No blogs found" }] }]);
    }

    return sanitizeEntity(entity, { model: strapi.models.blog });
  },
};
