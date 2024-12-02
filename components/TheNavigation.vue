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
  <header class="bg-[#236160] text-[#d0a465] text-lg font-medium  sticky top-0 z-50 shadow-lg">
    <nav class="container mx-auto flex items-center justify-between py-4 px-6">
      <img
        src="/aroma-grinder-logo.webp"
        loading="eager"
        alt="Aroma Grinder Logo"
        title="Aroma Grinder Logo"
        width="200"
        height="200"
        class="h-16"
      />

      <NavigationMenuRoot class="hidden md:flex space-x-6">
        <NavigationMenuList class="flex items-center space-x-6">
          <NavigationMenuItem>
            <NuxtLink
              to="/"
              active-class="text-[#fac826] border-b-2 border-[#fac826]"
              class="hover:text-[#fac826] transition pb-1"
            >
              Home
            </NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink
              to="/about-us"
              active-class="text-[#fac826] border-b-2 border-[#fac826]"
              class="hover:text-[#fac826] transition pb-1"
            >
              About
            </NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink
              to="/products"
              active-class="text-[#fac826] border-b-2 border-[#fac826]"
              class="hover:text-[#fac826] transition pb-1"
            >
              Products
            </NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink
              to="/contact"
              active-class="text-[#fac826] border-b-2 border-[#fac826]"
              class="hover:text-[#fac826] transition pb-1"
            >
              Contact
            </NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink
              to="/blog"
              active-class="text-[#fac826] border-b-2 border-[#fac826]"
              class="hover:text-[#fac826] transition pb-1"
            >
              Blog
            </NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink
              to="/blog/tags"
              active-class="text-[#fac826] border-b-2 border-[#fac826]"
              class="hover:text-[#fac826] transition pb-1"
            >
              Tags
            </NuxtLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NuxtLink
              to="/faq"
              active-class="text-[#fac826] border-b-2 border-[#fac826]"
              class="hover:text-[#fac826] transition pb-1"
            >
              FAQ
            </NuxtLink>
          </NavigationMenuItem>

          <NavigationMenuIndicator
            class="absolute bg-red-700 h-1 w-full rounded-md mt-1"
          />
        </NavigationMenuList>
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
