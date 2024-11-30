<script setup>
useSeoMeta({
  ogDescription: "Discover the best coffee grinder for your home and office. Our product is made from high-quality materials and has a wide range of features to suit your needs.",
  description: "Discover the best coffee grinder for your home and office. Our product is made from high-quality materials and has a wide range of features to suit your needs.",
})
const buyNowLink = "https://www.amazon.com/example-product";
</script>

<template>
  <section class="bg-amber-50 py-12">
    <div class="container mx-auto px-6 py-12 lg:px-16">
      <!-- Product Images Section -->
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-amber-900 mb-8">Products we offer today</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <img src="/grinder.jpg" title="product" alt="Product angle 1" loading="eager" width="400" height="400" class="rounded-lg shadow-md">
          <img src="/grinder.jpg" title="product" alt="Product angle 2" loading="eager" width="400" height="400" class="rounded-lg shadow-md">
          <img src="/grinder.jpg" title="product" alt="Product angle 3" loading="eager" width="400" height="400" class="rounded-lg shadow-md">
          <img src="/grinder.jpg" title="product" alt="Product angle 4" loading="eager" width="400" height="400" class="rounded-lg shadow-md">
        </div>
      </div>

      <!-- Product Description -->
      <div class="mb-12">
        <h2 class="text-xl font-semibold text-amber-900 mb-4">Description</h2>
        <p class="text-amber-800">
          Our product is made from high-quality materials. 
          The dimensions are ideal for everyday use. Key advantages include durability, 
          aesthetic design, and functionality.
        </p>
      </div>

      <!-- Video Section -->
      <div class="mb-12">
        <h2 class="text-xl font-semibold text-amber-900 mb-4">Video Showcase</h2>
        <div class="aspect-w-16 aspect-h-9 rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/example-video-id"
            title="Product showcase video"
            allowfullscreen
            class="w-full h-full"
          ></iframe>
        </div>
      </div>

      <!-- Specifications Section -->
      <div class="mb-12">
        <h2 class="text-xl font-semibold text-amber-900 mb-4">Specifications</h2>
        <ul class="text-amber-800 space-y-2">
          <li><strong>Package Dimensions:</strong> 24.5 × 13.5 × 7.4 cm</li>
          <li><strong>Materials:</strong> Stainless Steel, Wood</li>
        </ul>
      </div>

      <!-- Buy Now Button -->
      <div class="text-center">
        <a
          href="https://www.amazon.com/example-product"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-amber-600 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
        >
          Buy Now on Amazon
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-amber-50 {
  background-color: #fffbf2;
}
.text-amber-900 {
  color: #78350f;
}
.text-amber-800 {
  color: #92400e;
}
.bg-amber-600 {
  background-color: #d97706;
}
.hover\:bg-amber-700:hover {
  background-color: #b45309;
}
</style>
