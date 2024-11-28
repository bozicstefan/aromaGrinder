<script setup>
const {postDetails} = defineProps(["postDetails"])

const formattedDate = computed(() => {
  return new Date(postDetails.publishedAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
})
console.log("postDetails:", postDetails);

useServerSeoMeta({
  title: postDetails?.title,
  ogTitle: postDetails?.title,
  description: postDetails?.description,
  ogDescription: postDetails?.description,
  ogImage: `/${postDetails?.coverImage}`,
});

// TODO
// style post content
// find appropriate article format and stick to it in terms of structure and style
</script>

<template>
  <div class="bg-amber-50 p-6 max-w-[80%] mx-auto rounded-lg shadow-lg my-20">

    <div class="flex items-center gap-4 mb-6">
      <div class="bg-amber-200 text-amber-900 p-[2px] rounded-full">

        <img
          class="w-12 h-12 rounded-full"
          src="http://www.thispersondoesnotexist.com"
          alt="author"
        />
      </div>
      <div>
        <h1 class="text-2xl font-bold text-amber-800">{{ postDetails.title }}</h1>
        <p class="text-sm text-amber-600">
          By
          <span class="font-medium">{{  "AromaGrinder" }}</span> |
          {{formattedDate}}
        </p>
      </div>
    </div>


    <div  class="text-amber-900 space-y-4">
       <div v-html="postDetails.content"></div>
    </div>


    <div class="flex flex-wrap gap-2 mt-6">
      <NuxtLink v-for="tag in postDetails.expand.tags" :key="tag.id" :to="`/blog/tags/${tag.slug}`">
        <span
          class="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full"
          >{{ tag.name }}</span
        >
      </NuxtLink>
    </div>


    <div
  class="mt-8 border-t border-amber-200 pt-4 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center"
>
  <NuxtLink to="/blog">
    <button
      class="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition w-full sm:w-auto"
    >
      More Articles
    </button>
  </NuxtLink>
  <p class="text-sm text-amber-600 text-center sm:text-left">
    Share this article:
    <a href="#" class="text-amber-700 underline hover:text-amber-800 ml-1"
      >Facebook</a
    >
    |
    <a href="#" class="text-amber-700 underline hover:text-amber-800 ml-1"
      >Twitter</a
    >
  </p>
</div>
  </div>
</template>

<style scoped></style>
