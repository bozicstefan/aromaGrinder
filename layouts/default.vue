<script setup>
const modal = ref(null);
const route = useRoute()
const config = useRuntimeConfig();
const websiteURL = config.public.websiteURL

useHead({
  meta: [
  { property: 'og:title', content: `App Name - ${route.meta.title}` },
    { property: 'og:description', content: route.meta.description },
    { property: 'og:image', content: `${websiteURL}/grinder.jpg` },
    { property: 'og:url', content: 'https://aromagrinder.com' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'AromaGrinder' },
  ]

})

</script>

<template>
  <main>
    <LoadingModal ref="modal" />
    <TheNavigation />
   <slot />
  <TheFooter />
    <ScrollToTop />
  </main>
</template>

<style scoped></style>
