<script setup>
// Tailwind utilities are used for the design. Radix Vue components aren't explicitly used in this section, 
// but Radix could be integrated for interactivity (e.g., sliders for grind size adjustment).
</script>

<template>
    <section class="relative bg-gray-900 text-white overflow-hidden">
      <div class="container mx-auto flex flex-col md:flex-row items-center py-16 space-y-8 md:space-y-0 md:space-x-16">
        <!-- Left Content -->
        <div class="text-center md:text-left max-w-lg space-y-6">
          <h1 class="text-4xl font-extrabold leading-tight">
            Aroma Grinder - Perfect Coffee  <br />
            <span class="text-primary">Starts Here</span>
          </h1>
          <p class="text-gray-300 text-lg">
            Experience the art of coffee grinding with precision and care. Unleash the full potential of your beans with the perfect grind.
          </p>
          <div class="space-x-4">
            <button
              class="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-light transition"
            >
              Shop Coffee Grinders
            </button>
            <button
              class="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
            >
              Learn More
            </button>
          </div>
        </div>
  
        <!-- Right Content: Image -->
        <div class="relative w-full max-w-lg">
          <img
            src="https://source.unsplash.com/600x400/?coffee,grinding"
            alt="Person grinding coffee"
            class="rounded-lg shadow-lg"
          />
          <!-- Decorative Accent -->
          <div
            class="absolute top-0 left-0 w-24 h-24 bg-primary rounded-full opacity-50 blur-lg -translate-x-8 -translate-y-8"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-16 h-16 bg-primary-light rounded-full opacity-50 blur-lg translate-x-8 translate-y-8"
          ></div>
        </div>
      </div>
    </section>
  </template>

  
  <style scoped>
  /* Custom Tailwind configuration for the primary color */
  :root {
    --primary: #D97706; /* Adjust this to match the brand */
    --primary-light: #FBBF24;
  }
  </style>
  