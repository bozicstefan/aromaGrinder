<script setup>
const { post } = defineProps(["post"]);
</script>

<template>
  <article
    class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
  >
    <img :src="post?.coverImage ?? 'grinder.jpg'"  :alt="post.title" :title="post?.title" loading="eager" width="400" height="400" class="w-full h-48 object-cover" />
    <div class="p-6">
      <h3 class="text-xl font-semibold text-[#236160] mb-2">
        {{ post.title }}
      </h3>
      <p class="text-amber-800 text-sm mb-4">
        {{ post.description }}
      </p>
      <NuxtLink
        :to="`/blog/${post.slug}`"
        class="inline-block bg-amber-600 text-[#fffacb] py-2 px-4 rounded hover:bg-amber-500 hover:text-[#236160] transition-colors"
      >
        Read More
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped></style>
