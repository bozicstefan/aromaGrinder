<script setup>
const route = useRoute();
const { data } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryContent(`${route.params.slug}`).findOne()
);
console.log("data:", data.value);

useServerSeoMeta({
  title: data.value.title,
  ogTitle: data.value.title,
  description: data.value.description,
  ogDescription: data.value.description,
  ogImage: `/${data?.value?.cover}`,
});
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
        <h1 class="text-2xl font-bold text-amber-800">{{ data.title }}</h1>
        <p class="text-sm text-amber-600">
          By
          <span class="font-medium">{{ data.author ?? "AromaGrinder" }}</span> |
          Nov 24, 2024
        </p>
      </div>
    </div>


    <div class="text-amber-900 space-y-4">
      <ContentRenderer :value="data" />
    </div>


    <div class="flex flex-wrap gap-2 mt-6">
      <NuxtLink v-for="tag in data.tags" :key="tag" :to="`/blog/tags/${tag}`">
        <span
          class="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full"
          >{{ tag }}</span
        >
      </NuxtLink>
    </div>


    <div
      class="mt-8 border-t border-amber-200 pt-4 flex justify-between items-center"
    >
      <NuxtLink to="/blog">
        <button
          class="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition"
        >
          More Articles
        </button>
      </NuxtLink>
      <p class="text-sm text-amber-600">
        Share this article:
        <a href="#" class="text-amber-700 underline hover:text-amber-800 ml-1"
          >Facebook</a
        >
        |
        <a href="#" class="text-amber-700 underline hover:text-amber-800"
          >Twitter</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>
