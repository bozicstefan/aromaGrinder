<script setup>

</script>

<template>
<section id="contact" class="py-12 bg-amber-50">
  <div class="container mx-auto px-6 lg:px-20">
    <!-- Section Title -->
    <h2 class="text-3xl lg:text-4xl font-bold text-amber-700 text-center mb-8">
      Contact Us
    </h2>

    <!-- Contact Form -->
    <div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      <form action="/send-message" method="POST" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" required 
            class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500">
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" required 
            class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500">
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows="5" required 
            class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"></textarea>
        </div>
        <button type="submit" 
          class="w-full py-2 px-4 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500">
          Send Message
        </button>
      </form>
    </div>

    <!-- Social Media Links -->
    <div class="text-center mt-10">
      <h3 class="text-xl font-semibold text-amber-700 mb-4">Follow Us</h3>
      <div class="flex justify-center space-x-6">
        <a href="https://instagram.com/aromagrinder" target="_blank" 
          class="text-amber-600 hover:text-amber-800 text-lg font-medium">
          Instagram
        </a>
        <a href="https://facebook.com/aromagrinder" target="_blank" 
          class="text-amber-600 hover:text-amber-800 text-lg font-medium">
          Facebook
        </a>
      </div>
    </div>

    <!-- Support Info -->
    <div class="text-center mt-6">
      <p class="text-gray-700">
        Have questions? Contact us at 
        <a href="mailto:support@aromagrinder.com" 
          class="text-amber-600 hover:underline">support@aromagrinder.com</a>.
      </p>
    </div>
  </div>
</section>
<AmazonIntegration />

</template>

<style scoped>

</style>