<script setup>
</script>

<template>
  <section class="bg-gradient-to-br from-amber-800 via-amber-100 to-amber-900 py-20 px-8">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <!-- Left Content: Image or Illustration -->
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full blur-3xl opacity-30"></div>
        <img
          src="/grinder.jpg"
          alt="Coffee Grinder"
          class="rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
        />
      </div>

      <!-- Right Content: Text -->
      <div>
        <h2 class="text-4xl font-extrabold text-amber-900 mb-6">About Us</h2>
        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
          At Aroma Grinder, we believe every coffee lover deserves the perfect brewing experience. Born from a passion for coffee,
          we create products that blend functionality, quality, and modern aesthetics.
        </p>

        <!-- Mission and Vision -->
        <div class="space-y-6">
          <div>
            <h3 class="text-2xl font-semibold text-amber-800">Mission</h3>
            <p class="text-gray-600">
              To bring the ultimate coffee-making experience to every coffee lover.
            </p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-amber-700">Vision</h3>
            <p class="text-gray-600">
              To merge modern design with functionality, setting new standards in coffee brewing.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Brand Values -->
    <div class="mt-16 text-center">
      <h3 class="text-3xl font-bold text-amber-900 mb-6">Our Core Values</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <h4 class="text-xl font-semibold text-amber-800 mb-4">Quality</h4>
          <p class="text-gray-600">
            Dedication to every detail ensures the finest coffee experience.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <h4 class="text-xl font-semibold text-amber-800 mb-4">Sustainability</h4>
          <p class="text-gray-600">
            Commitment to eco-friendly materials and responsible production.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
          <h4 class="text-xl font-semibold text-amber-800 mb-4">Customer Satisfaction</h4>
          <p class="text-gray-600">
            Ensuring every interaction exceeds expectations.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
