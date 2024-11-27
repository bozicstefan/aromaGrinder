export default defineEventHandler({
    handler: async (event) => {
      const pocketBaseURL = process.env.POCKETBASE_URL || "http://localhost:8090";
  
      const allTags = await $fetch(
        `${pocketBaseURL}/api/collections/tags/records`
      );

      // console.log('allTags:', allTags);
      return structuredClone(allTags?.items);
    },
  });
  