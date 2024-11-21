

<script setup>
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuSub,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "radix-vue";


const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  console.log("isMobileMenuOpen:", isMobileMenuOpen.value);
};
</script>

<template>
  <header class="bg-gray-800 text-white">
    <nav class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <div class="text-lg font-bold">
        <a href="#" class="hover:text-primary">MyBrand</a>
      </div>

      <!-- Navigation Menu -->
      <NavigationMenuRoot class="hidden md:flex space-x-6">
        <NavigationMenuList class="flex items-center space-x-6">
          <NavigationMenuItem>
            <NuxtLink to="/">Home</NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink to="/about-us">About</NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink to="/products">Products</NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink to="/faq">FAQ</NuxtLink>
          </NavigationMenuItem>

          <!-- Navigation Indicator -->
          <NavigationMenuIndicator
            class="absolute bg-primary h-1 w-full rounded-md mt-1"
          />
        </NavigationMenuList>

        <!-- Navigation Viewport -->
        <NavigationMenuViewport class="relative mt-2" />
      </NavigationMenuRoot>

      <DropdownMenu/>
      <!-- Mobile Menu Button -->
      <!-- <button
        class="md:hidden text-2xl focus:outline-none"
        @click="toggleMobileMenu"
        aria-label="Toggle Menu"
      >
        ☰
      </button> -->

      <!-- Mobile Menu -->
      <!-- <div
        v-if="isMobileMenuOpen"
        class="absolute top-16 right-0 w-full bg-gray-900 text-white p-4"
      >
        <ul class="space-y-4 flex flex-col items-end">
          <li>
            <NuxtLink to="/" class="block hover:text-primary">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-us" class="block hover:text-primary">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="block hover:text-primary">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="block hover:text-primary">Contact</NuxtLink>
          </li>
  
          <li>
            <NuxtLink to="/blog" class="block hover:text-primary">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/faq" class="block hover:text-primary">FAQ</NuxtLink>
          </li>
        </ul>
      </div> -->
    </nav>
  </header>
</template>

<style scoped>
.NavigationMenuIndicator {
  transition: transform 0.2s ease-in-out;
}
.absolute {
  z-index: 50;
}
</style>
