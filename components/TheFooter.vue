<script setup></script>

<template>
  <footer class="bg-amber-900 text-amber-300 py-12">
    <div class="container mx-auto px-6 lg:px-16">
      <!-- Footer Top: Navigation and Social Links -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Navigation Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Navigation</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="hover:text-amber-400">Home</a>
            </li>
            <li>
              <a href="#" class="hover:text-amber-400">About Us</a>
            </li>
            <li>
              <a href="#" class="hover:text-amber-400">Product</a>
            </li>
            <li>
              <a href="#" class="hover:text-amber-400">Blog</a>
            </li>
            <li>
              <a href="#" class="hover:text-amber-400">FAQ</a>
            </li>
            <li>
              <a href="#" class="hover:text-amber-400">Contact Us</a>
            </li>
          </ul>
        </div>
        <!-- Social Media and Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
          <ul class="space-y-2">
            <li>
              <a href="" class="flex items-center hover:text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
                <span class="ml-2">Facebook</span>
              </a>
            </li>
            <li>
              <a href="" class="flex items-center hover:text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                <span class="ml-2">Instagram</span> 
              </a>
            </li>
            <li>
              <a href="" class="flex items-center hover:text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="currentColor"><path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z"><animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"/></path><path d="M3 2h5v0h-5zM16 22h5v0h-5z"><animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"/></path><path d="M18.5 2h3.5L22 2h-3.5z"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"/></path></g></svg>
                <span class="ml-2">Twitter</span> 
              </a>
            </li>
            <li class="mt-4">
              <p>Email: <a href="mailto:info@yourstore.com" class="hover:text-amber-400">info@yourstore.com</a></p>
              <p>Phone: <a href="tel:+123456789" class="hover:text-amber-400">+1 234 567 89</a></p>
            </li>
          </ul>
        </div>
        <!-- Terms and Conditions -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Legal</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="hover:text-amber-400">Terms of Service</a>
            </li>
            <li>
              <a href="#" class="hover:text-amber-400">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:text-amber-400">Cookies</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom: Copyright -->
      <div class="text-center border-t border-amber-700 pt-6">
        <p class="text-sm">&copy; 2024 Aroma Grinder Store. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Additional styling for amber theme */
.hover\:text-amber-400:hover {
  color: #fbbf24;
}
.bg-amber-900 {
  background-color: #3f3f3f;
}
.text-amber-300 {
  color: #fbbf24;
}
.border-amber-700 {
  border-color: #b45309;
}
</style>
