<script setup>
const { slug } = useRoute().params;
const postDetails = ref(null);
const {data:res} = await useFetch(`/api/posts/single/?slug=${slug}`);

postDetails.value = res.value?.items[0];

</script>

<template>
   <PostDetails :postDetails="postDetails"/>
</template>

<style scoped>

</style>