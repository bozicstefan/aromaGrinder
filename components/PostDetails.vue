<script setup>
const { postDetails } = defineProps(["postDetails"]);

const formattedDate = computed(() => {
  return new Date(postDetails.publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
});
// console.log("postDetails:", postDetails);

useServerSeoMeta({
  title: postDetails?.title,
  ogTitle: postDetails?.title,
  description: postDetails?.description,
  ogDescription: postDetails?.description,
  ogImage: `/${postDetails?.coverImage}`,
});
</script>

<template>
  <section class="bg-amber-50  sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto rounded-lg shadow-lg my-10 ">
    <article>
      <div
    class="relative bg-cover bg-center rounded-ss-lg rounded-se-lg shadow-lg overflow-hidden h-[20rem] flex flex-col items-start justify-end"
    :style="{ backgroundImage: `url(${postDetails.coverImage})` }"
  >
    <div class="absolute inset-0 bg-amber-900 bg-opacity-40"></div>

   
    <header class="relative flex items-center gap-4 p-6 bg-amber-50 bg-opacity-90 rounded-lg m-4">
      <div class="bg-amber-200 text-amber-900 p-[2px] rounded-full">
        <img
          class="w-12 h-12 rounded-full avatar"
          src="http://www.thispersondoesnotexist.com"
          alt="author"
        />
      </div>
      <div>
        <h1 class="text-2xl font-bold text-amber-800">
          {{ postDetails.title }}
        </h1>
        <p class="text-sm text-amber-600">
          By <span class="font-medium">{{ "AromaGrinder" }}</span> | {{ formattedDate }}
        </p>
      </div>
    </header>
  </div>
      <!-- <header class="flex items-center gap-4 mb-6">
        <div class="bg-amber-200 text-amber-900 p-[2px] rounded-full">
          <img
            class="w-12 h-12 rounded-full avatar"
            src="http://www.thispersondoesnotexist.com"
            alt="author"
          />
        </div>
        <div>
          <h1 class="text-2xl font-bold text-amber-800">
            {{ postDetails.title }}
          </h1>
          <p class="text-sm text-amber-600">
            By
            <span class="font-medium">{{ "AromaGrinder" }}</span> |
            {{ formattedDate }}
          </p>
        </div>
      </header> -->

      <section v-html="postDetails.content" class="post-content px-6 mt-10 text-justify text-amber-900 space-y-4 border-b border-amber-200"></section>

      <div class="flex flex-wrap gap-4 mt-10 ps-6">
        <NuxtLink
          v-for="tag in postDetails.expand.tags"
          :key="tag.id"
          :to="`/blog/tags/${tag.slug}`"
        >
          <span
            class="bg-amber-200 text-amber-800 text-sm px-5 py-2 rounded-full font-semibold transition duration-300 ease-in-out hover:bg-amber-200 hover:text-amber-900"
            >{{ tag.name }}</span
          >
        </NuxtLink>
      </div>
    </article>
    <div
      class="mt-8 ms-6 pt-2 pb-6 pe-6 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center"
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
  </section>
</template>

<style scoped>

html{
  scroll-behavior: smooth;
}

a span {
  font-size: 1.125rem; 
  padding: 0.5rem 1rem; 
}

a span:hover {
  background-color: #fbbf24; 
  color: #5f3f00;
}

/* Scoped styles won’t work with v-html, so using ::v-deep(with custom post-content class' styles instead. */

::v-deep(.post-content p:first-child::first-letter){
  font-size: 3rem; 
  font-weight: bold;  color: #f59e0b;
  float: left; 
  margin-right: 0.25rem; 
  line-height: 1;
}

::v-deep(.post-content p),
::v-deep(.post-content a) {
  line-height: 1.8;
  margin-bottom: 1rem;
}

::v-deep(.post-content a) {
  color: #f59e0b;
  text-decoration: underline;
  transition: color 0.3s;
}

::v-deep(.post-content a:hover) {
  color: #d97706;
}

::v-deep(.post-content h2), ::v-deep(.post-content h3), ::v-deep(.post-content h4) {
  color: #9a7b49;
}

::v-deep(.post-content h2) {
  font-size: 1.875rem;
}

::v-deep(.post-content ul), ::v-deep(.post-content ol) {
  padding-left: 1.25rem;
  margin-bottom: 1.5rem;
}

::v-deep(.post-content .toc) {
  background-color: #FEFEFE;
  width: fit-content;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

::v-deep(.post-content .toc h2) {
  font-size: 1.25rem;
  margin-bottom: .75rem;
}

::v-deep(.post-content .toc ul)  {
  list-style-type: decimal;
  text-align: start;
}

::v-deep(.post-content li) {
  margin-bottom: 0.75rem;
}

::v-deep(.post-content blockquote) {
  background-color: #fff3e0; 
  border-left: 4px solid #f59e0b;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-style: italic;
  color: #7c4d15;
}

::v-deep(.post-content img:not(.avatar)) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

::v-deep(.post-content pre) {
  background-color: #fef3c7;
  color: #6d4c41;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  margin-bottom: 1.5rem;
}

::v-deep(.post-content code) {
  font-size: 0.875rem;
  color: #6d4c41;
  padding: 0.25rem 0.5rem;
  background-color: #f7e0b4;
  border-radius: 4px;
}

::v-deep(.post-content table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
}

::v-deep(.post-content th), ::v-deep(.post-content td) {
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #f59e0b;
}

::v-deep(.post-content th) {
  background-color: #fef3c7;
  font-weight: bold;
}

::v-deep(.post-content tr:nth-child(even)) {
  background-color: #f7f1e3;
}

::v-deep(.post-content hr){
  border-top: 1px solid #f59e0b;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>

