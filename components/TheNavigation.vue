<script setup>
import {
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuViewport,
} from "radix-vue";
</script>

<template>
  <header class="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white sticky top-0 z-50 shadow-lg">
    <nav class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <div class="text-2xl font-extrabold text-amber-300 hover:text-amber-400 transition">
        <a href="#">AromaGrinder</a>
      </div>

      <!-- Navigation Menu -->
      <NavigationMenuRoot class="hidden md:flex space-x-6">
        <NavigationMenuList class="flex items-center space-x-6">
          <NavigationMenuItem>
            <NuxtLink
              to="/"
              active-class="text-amber-300 border-b-2 border-amber-300"
              class="hover:text-amber-400 transition pb-1"
            >
              Home
            </NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink
              to="/about-us"
              active-class="text-amber-300 border-b-2 border-amber-300"
              class="hover:text-amber-400 transition pb-1"
            >
              About
            </NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink
              to="/products"
              active-class="text-amber-300 border-b-2 border-amber-300"
              class="hover:text-amber-400 transition pb-1"
            >
              Products
            </NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink
              to="/contact"
              active-class="text-amber-300 border-b-2 border-amber-300"
              class="hover:text-amber-400 transition pb-1"
            >
              Contact
            </NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink
              to="/blog"
              active-class="text-amber-300 border-b-2 border-amber-300"
              class="hover:text-amber-400 transition pb-1"
            >
              Blog
            </NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink
              to="/faq"
              active-class="text-amber-300 border-b-2 border-amber-300"
              class="hover:text-amber-400 transition pb-1"
            >
              FAQ
            </NuxtLink>
          </NavigationMenuItem>

          <!-- Navigation Indicator -->
          <NavigationMenuIndicator
            class="absolute bg-amber-400 h-1 w-full rounded-md mt-1"
          />
        </NavigationMenuList>

        <!-- Navigation Viewport -->
        <NavigationMenuViewport class="relative mt-2" />
      </NavigationMenuRoot>

      <!-- Dropdown Menu for Mobile -->
      <DropdownMenu />
    </nav>
  </header>
</template>

<style scoped>
.NavigationMenuIndicator {
  transition: transform 0.2s ease-in-out;
}
</style>
