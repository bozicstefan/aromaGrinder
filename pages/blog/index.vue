<script setup>
const posts = ref([])
const {data:res} = await useFetch("/api/posts");
posts.value = res.value?.items;
</script>

<template>
    <section class="bg-amber-100 py-12">
      <div class="container mx-auto px-6 lg:px-16">
        <!-- Section Title -->
        <h2 class="text-3xl font-semibold text-amber-900 mb-8 text-center">
          Latest Blog Posts
        </h2>
  
        <!-- Blog Post Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Single Blog Post -->
        <BlogPost v-for="post in posts" :key="post._id" :post="post"/>
        </div>
      </div>
    </section>
    <AmazonIntegration/>
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
  