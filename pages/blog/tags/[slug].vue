<script setup>
const { params } = useRoute();

const { data: postsWithTag } = await useAsyncData("tags", () =>
  queryContent()
    .where({ tags: { $contains: params.slug } })
    .find()
);

console.log("postsWithTag:", postsWithTag.value);
</script>

<template>
  <div class="bg-amber-50 min-h-screen text-amber-900">
    <h1 class="text-3xl font-bold text-center pt-10 mb-12">
      Posts with tag:
      <span class="text-teal-600 underline">{{ params.slug }}</span>
    </h1>

    <section class="grid md:grid-cols-3 gap-10 px-6 md:px-20 mt-10">
      <NuxtLink
        v-for="post in postsWithTag"
        :key="post._id"
        :to="`/blog${post._path}`"
        class="group bg-amber-100 p-6 rounded-lg shadow-lg transition-all hover:shadow-xl hover:bg-amber-200"
      >
        <div class="relative">
          <img
            class="w-full h-60 rounded-xl object-cover"
            :src="`${'/'}${post.cover}`"
            alt="Post Cover"
          />
          <div
            class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-50 rounded-xl"
          ></div>
        </div>
        <h2
          class="text-xl text-center mt-4 text-amber-800 group-hover:text-amber-900 font-semibold"
        >
          {{ post.title }}
        </h2>
        <p class="text-center mt-2 text-amber-600 group-hover:text-amber-700">
          {{ post.description }}
        </p>
      </NuxtLink>
    </section>
  </div>
</template>

<style scoped></style>
