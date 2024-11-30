<script setup></script>

<template>
  <section class="container mx-auto py-12">
    <h2 class="text-3xl font-bold text-center">Key Features</h2>
    <div class="flex flex-col gap-12 lg:flex-row justify-around py-10">
      <div class="border border-[#d9dd9] pt-2">
        <h3 class="text-amber-300 text-2xl text-center font-bold">
          Premium Materials
        </h3>
        <p class="text-gray-600 text-center">Stainless steel and hardwood.</p>
        <img
          class="w-full mt-1 lg:size-64"
          src="/premium-materials.webp"
          width="200"
          height="200"
          alt="premium materials"
          title="Premium Materials"
          loading="eager"
        />
      </div>
      <div class="border border-[#d9dd9] pt-2">
        <h3 class="text-amber-300 text-2xl text-center font-bold">
          Adjustable Grind
        </h3>
        <p class="text-gray-600 text-center">For all types of coffee.</p>
        <img
          class="w-full mt-1 lg:size-64"
          src="/adjustable-grind.jpg"
          width="200"
          height="200"
          alt="adjustable grind"
          title="Adjustable Grind"
          loading="eager"
        />
      </div>
      <div class="border border-[#d9dd9] pt-2">
        <h3 class="text-amber-300 text-2xl text-center font-bold">
          Portable Design
        </h3>
        <p class="text-gray-600 text-center">Perfect for travel.</p>
        <img
          class="w-full mt-1 lg:size-64"
          src="/portable-design.webp"
          width="200"
          height="200"
          alt="portable design"
          title="Portable Design"
          loading="eager"
        />
      </div>
    </div>
  </section>
</template>
