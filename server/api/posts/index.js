export default defineEventHandler({
    handler: async (event) => {
      const pocketBaseURL = process.env.POCKETBASE_URL || "http://localhost:8090";
  
      const { sort, perPage, search, category, tag } = getQuery(event);
  
      if (sort && perPage) {
        try {
          const posts = await $fetch(
            `${pocketBaseURL}/api/collections/posts/records?sort=${sort}&perPage=${perPage}&expand=category,author,tags`
          );
          return structuredClone(posts);
        } catch (error) {
          console.error("Error fetching posts:", error);
          throw createError({
            statusCode: 500,
            statusMessage: "Error fetching posts",
          });
        }
      } else if (search) {
        try {
          const allPosts = await $fetch(
            `${pocketBaseURL}/api/collections/posts/records?&expand=category,author,tags`
          );
  
          const filteredPosts = await allPosts.items.filter((post) => {
            return (
              post.title.toLowerCase().includes(search.toLowerCase()) ||
              post.content.toLowerCase().includes(search.toLowerCase())
            );
          });
          return filteredPosts.map((post) => {
            return {
              source: "blog",
              ...post,
            };
          });
        } catch (error) {
          console.error("Error searching posts:", error);
          throw createError({
            statusCode: 500,
            statusMessage: "Error searching post",
          });
        }
      } else if (category) {
        try {
          const postsByCategories = await $fetch(
            `${pocketBaseURL}/api/collections/posts/records?expand=category,author,tags&filter=category.name?~"${encodeURIComponent(
              category
            )}"`
          );
          return structuredClone(postsByCategories);
        } catch (error) {
          console.error("Error fetching posts by category:", error);
          throw createError({
            statusCode: 500,
            statusMessage: "Error fetching posts by category",
          });
        }
      } else if (tag) {
        try {
          const postsByTags = await $fetch(
            `${pocketBaseURL}/api/collections/posts/records?expand=category,author,tags&filter=(tags.slug?~%22${(
              tag
            )}%22)`
          );

          console.log("postsByTags:", postsByTags);
          return structuredClone(postsByTags);
        } catch (error) {
          console.error("Error fetching posts by tag:", error);
          throw createError({
            statusCode: 500,
            statusMessage: "Error fetching posts by tag",
          });
        }
      } else {
        try {
          const posts = await $fetch(
            `${pocketBaseURL}/api/collections/posts/records?expand=category,author,tags`
          );
          return structuredClone(posts);
        } catch (error) {
          console.error("Error fetching posts:", error);
          throw createError({
            statusCode: 500,
            statusMessage: "Error fetching posts",
          });
        }
      }
    },
  });