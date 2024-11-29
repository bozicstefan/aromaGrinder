<script setup>
const modal = ref(null);
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
