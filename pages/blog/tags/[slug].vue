<script setup>
useSeoMeta({
  title: "Aroma Grinder - Blog Tags",
  description: "Discover the latest news and updates on Aroma Grinder and our coffee brewing products.",
  ogTitle: "Aroma Grinder - Blog Tags",
  ogDescription: "Discover the latest news and updates on Aroma Grinder and our coffee brewing products.",
})
const { slug } = useRoute().params;
const postsWithTag = ref([])
const {data:res}=await useFetch(`/api/posts?tag=${slug}`)
postsWithTag.value=res.value?.items
</script>

<template>
  <section class="bg-amber-100 text-amber-900 py-4">
    <div class="container mx-auto px-6 lg:px-16 pb-20">
      <h1 class="text-4xl font-bold text-center pt-16 mb-20">
      Aroma Grinder Blog Posts with tag:
      <span class="text-teal-600 underline">{{ slug }}</span>
    </h1>
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <BlogPost v-for="post in postsWithTag" :key="post.id" :post="post" />
    </section>
    </div>
  </section>
  <AmazonIntegration/>
</template>

<style scoped></style>
