<script setup>
const modal = ref(null);

</script>

<template>
  <div>
    <LoadingModal ref="modal"/>
    <TheNavigation />
    <slot />
    <TheFooter />
    <ScrollToTop/>
  </div>
</template>

<style scoped></style>
