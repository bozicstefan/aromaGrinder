<script setup>

useSeoMeta({
  title: "Aroma Grinder - Blog",
  description: "Discover the latest news and updates on Aroma Grinder and our coffee brewing products.",
  ogTitle: "Aroma Grinder - Blog",
  ogDescription: "Discover the latest news and updates on Aroma Grinder and our coffee brewing products.",
})


const posts = ref([])
const {data:res} = await useFetch("/api/posts");
posts.value = res.value?.items;
console.log('posts:', posts.value);
</script>

<template>
    <section class="bg-[#fffacb] py-20">
      <div class="container mx-auto px-6 lg:px-16">
        <h1 class="text-4xl font-bold text-[#236160] mb-20 text-center">
          Latest Blog Posts by Aroma Grinder
        </h1>
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogPost v-for="post in posts" :key="post.id" :post="post"/>
        </section>
      </div>
    </section>
    <AmazonIntegration bgColor="#d0a465"/>
  </template>
  

  
  <style scoped>
  .bg-amber-100 {
    background-color: #fef3c7;
  }
  .text-amber-900 {
    color: #78350f;
  }
  .text-amber-700 {
    color: #92400e;
  }
  .bg-amber-600 {
    background-color: #d97706;
  }
  .hover\:bg-amber-700:hover {
    background-color: #b45309;
  }
  </style>
  