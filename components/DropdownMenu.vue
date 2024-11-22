<script setup>
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "radix-vue";

const toggleState = ref(false);
</script>

<template>
  <DropdownMenuRoot class="md:hidden" v-model:open="toggleState">
    <!-- Dropdown Trigger (Hamburger Icon) -->
    <DropdownMenuTrigger
      class="md:hidden rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-amber-400 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-amber-100 focus:shadow-[0_0_0_2px] focus:shadow-black"
      aria-label="Menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16m0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16m0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16"
        />
      </svg>
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="w-[200px]  border-[1px] border-yellow-200 outline-none bg-amber-900 rounded-md p-4 shadow-lg will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        :side-offset="5"
      >
        <!-- Menu Items -->
        <DropdownMenuItem
          class="text-center hover:bg-amber-100 text-white p-2 rounded-md"
        >
          <NuxtLink  active-class="text-amber-300 border-b-2 border-amber-300" to="/">Home</NuxtLink>
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center hover:bg-amber-100 text-white p-2 rounded-md"
        >
          <NuxtLink  active-class="text-amber-300 border-b-2 border-amber-300" to="/about-us">About</NuxtLink>
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center hover:bg-amber-100 text-white p-2 rounded-md"
        >
          <NuxtLink  active-class="text-amber-300 border-b-2 border-amber-300" to="/products">Products</NuxtLink>
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center hover:bg-amber-100 text-white p-2 rounded-md"
        >
          <NuxtLink  active-class="text-amber-300 border-b-2 border-amber-300" to="/contact">Contact</NuxtLink>
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center hover:bg-amber-100 text-white p-2 rounded-md"
        >
          <NuxtLink  active-class="text-amber-300 border-b-2 border-amber-300" to="/blog">Blog</NuxtLink>
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center hover:bg-amber-100 text-white p-2 rounded-md"
        >
          <NuxtLink  active-class="text-amber-300 border-b-2 border-amber-300" to="/faq">FAQ</NuxtLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<style scoped>
/* Custom hover effect and text colors */
.text-amber-600:hover {
  color: #d97706; /* Amber shade on hover */
}

/* Smooth transition for hover effects */
.dropdown-item {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
