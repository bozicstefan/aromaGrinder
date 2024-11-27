<script setup>
const { post } = defineProps(["post"]);
</script>

<template>
  <article
    class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
  >
    <img :src="post?.coverImage ?? 'grinder.jpg'"  :alt="post.title" class="w-full h-48 object-cover" />
    <div class="p-6">
      <h3 class="text-xl font-semibold text-amber-900 mb-2">
        {{ post.title }}
      </h3>
      <p class="text-amber-700 text-sm mb-4">
        {{ post.description }}
      </p>
      <NuxtLink
        :to="`/blog/${post.slug}`"
        class="inline-block bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition-colors"
      >
        Read More
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped></style>
