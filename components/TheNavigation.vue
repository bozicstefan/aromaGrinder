

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
  <header class="bg-gray-800 text-white sticky top-0 z-50">
    <nav class="container mx-auto flex items-center justify-between p-4 sticky ">
      <!-- Logo -->
      <div class="text-lg font-bold">
        <a href="#" class="hover:text-primary">MyBrand</a>
      </div>

      <!-- Navigation Menu -->
      <NavigationMenuRoot class="hidden md:flex space-x-6">
        <NavigationMenuList class="flex items-center space-x-6">
          <NavigationMenuItem class="hover:text-yellow-400 active:text-yellow-700">
            <NuxtLink active-class="text-yellow-300" to="/">Home</NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem class="hover:text-yellow-400">
            <NuxtLink active-class="text-yellow-300"  to="/about-us">About</NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem class="hover:text-yellow-400">
            <NuxtLink active-class="text-yellow-300"  to="/products">Products</NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem class="hover:text-yellow-400">
            <NuxtLink active-class="text-yellow-300"  to="/contact">Contact</NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem class="hover:text-yellow-400">
            <NuxtLink active-class="text-yellow-300"  to="/blog">Blog</NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink active-class="text-yellow-300"  to="/faq" class="hover:text-yellow-400">FAQ</NuxtLink>
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
