<script setup>
useSeoMeta({
  title: "Aroma Grinder - About Us",
  description: "Discover the story behind Aroma Grinder and our commitment to excellence in coffee brewing.",
  ogTitle: "Aroma Grinder - About Us",
  ogDescription: "Discover the story behind Aroma Grinder and our commitment to excellence in coffee brewing.",
})
</script>

<template>
  <section class="bg-gradient-to-br from-amber-800 via-amber-100 to-amber-900 py-20 px-8">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
     
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full blur-3xl opacity-30"></div>
        <img
          src="/grinder.jpg"
          alt="Coffee Grinder"
          class="rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
          title="Coffee Grinder"
          loading="eager"
          width="600"
          height="600"
        />
      </div>

  
      <div>
        <h1 class="text-4xl font-extrabold text-[#236160] mb-6">About Us</h1>
        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
          At Aroma Grinder, we believe every coffee lover deserves the perfect brewing experience. Born from a passion for coffee,
          we create products that blend functionality, quality, and modern aesthetics.
        </p>

   
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-semibold text-[#236160]">Mission</h2>
            <p class="text-gray-600">
              To bring the ultimate coffee-making experience to every coffee lover.
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-[#236160]">Vision</h2>
            <p class="text-gray-600">
              To merge modern design with functionality, setting new standards in coffee brewing.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Brand Values -->
    <div class="mt-20 mb-6 text-center ">
      <h2 class="text-3xl font-bold text-[#236160] mb-16">Our Core Values</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <h3 class="text-xl font-semibold text-[#236160] mb-4">Quality</h3>
          <p class="text-gray-600">
            Dedication to every detail ensures the finest coffee experience.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <h3 class="text-xl font-semibold text-[#236160] mb-4">Sustainability</h3>
          <p class="text-gray-600">
            Commitment to eco-friendly materials and responsible production.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <h3 class="text-xl font-semibold text-[#236160] mb-4">Customer Satisfaction</h3>
          <p class="text-gray-600">
            Ensuring every interaction exceeds expectations.
          </p>
        </div>
      </div>
    </div>
  </section>
  <AmazonIntegration/>
</template>

<style scoped>
</style>
