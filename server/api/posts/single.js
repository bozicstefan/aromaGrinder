export default defineEventHandler({
    handler: async (event) => {
      const { slug } = getQuery(event);
      const pocketBaseURL = process.env.POCKETBASE_URL || "http://localhost:8090";
  
      try {
        const postDetails = await $fetch(
          `${pocketBaseURL}/api/collections/posts/records?expand=category,author,tags&filter=(slug=%22${slug}%22)`
        );
        return structuredClone(postDetails);
      } catch (error) {
        console.error("Error fetching post details:", error);
        throw createError({
          statusCode: 500,
          statusMessage: "Error fetching post details",
        });
      }
    },
  });