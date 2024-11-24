<script setup>
const { data: postsWithTags } = await useAsyncData("tags", () =>
  queryContent()
    .where({ tags: { $exists: true } })
    .find()
);
const allTags = postsWithTags.value.map((post) => post.tags).flat();
</script>

<template>
  <div class="bg-amber-50 min-h-screen">
    <h1
      class="text-3xl font-bold text-center text-amber-800 pt-10 mb-12 underline"
    >
      All Blog Tags
    </h1>

    <div class="flex flex-wrap justify-center gap-4 mb-10">
      <NuxtLink
        v-for="tag in allTags"
        :key="tag"
        :to="`/blog/tags/${tag}`"
        class="flex items-center text-sm font-semibold px-4 py-2 bg-amber-100 text-amber-800 rounded-lg shadow-md hover:bg-amber-200 transition-colors duration-200"
      >
        <Icon name="mdi-tag-text-outline" size="1.5rem" class="mr-2" />
        {{ tag }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
