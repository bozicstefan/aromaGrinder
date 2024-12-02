<script setup></script>

<template>
  <section
    class="relative bg-gradient-to-br from-amber-900 via-amber-700 to-amber-800 text-white overflow-hidden"
  >
    <div
      class="container mx-auto flex flex-col md:flex-row items-center lg:space-x-[30%] py-16 space-y-8 md:space-y-0 md:space-x-16"
    >
      <div class="px-4 text-center md:text-left max-w-lg space-y-6">
        <h1 class="text-5xl font-extrabold leading-tight text-[#d0a465]">
          <img src="/aroma-grinder-logo.webp" loading="eager" title="Aroma Grinder Logo" alt="Aroma Grinder Logo" class="h-26"/> 
          <br />
          Perfect Coffee <span class="text-[#fffacb]">Starts Here</span>
        </h1>
        <p class="text-[#d0a465] text-lg">
          Experience the art of coffee grinding with precision and care. Unleash
          the full potential of your beans with the perfect grind.
        </p>
        <div class="flex flex-col sm:flex-row place-content-start gap-6 ">
          <NuxtLink to="/products">
          <button
            class="bg-amber-900 text-[#fffacb] px-6 py-3 rounded-md hover:bg-[#d0a465] transition"
          >
            Our Coffee Grinders
          </button>
        </NuxtLink>
          <NuxtLink to="/about-us">
          <button
            class="bg-amber-500 text-[#fffacb] px-6 py-3 rounded-md hover:bg-[#d0a465] transition"
          >
            Learn More
          </button>
        </NuxtLink>
        </div>
      </div>

      <div class="w-full max-w-lg">
        <img
          src="/public/grinder.jpg"
          alt="coffee grinder"
          title="coffee grinder"
          loading="eager"
          width="500"
          height="500"
          class="shadow-lg rounded-lg transform hover:scale-105 transition duration-500"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
