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
    <DropdownMenuTrigger
      class="md:hidden rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-[#d0a465] bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-amber-100 focus:shadow-[0_0_0_2px] focus:shadow-black"
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
        class="w-[200px] border-[1px] border-[#d0a465] outline-none bg-[#236160] rounded-md pt-10 py-4 shadow-lg will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        :side-offset="5"
      >
  
        <DropdownMenuItem
          class="text-center hover:bg-[#fffacb] text-[#d0a465] p-2 rounded-md"
        >
          <NuxtLink
          class="hover:text-[#fac826] transition pb-1"  
          active-class="text-[#fac826] border-b-2 border-[#fac826]"
            to="/"
            >Home</NuxtLink
          >
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center hover:bg-amber-100 text-[#d0a465] p-2 rounded-md"
        >
          <NuxtLink
          class="hover:text-[#fac826] transition pb-1"  
          active-class="text-[#fac826] border-b-2 border-[#fac826]"
            to="/about-us"
            >About</NuxtLink
          >
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center hover:bg-amber-100 text-[#d0a465] p-2 rounded-md"
        >
          <NuxtLink
          class="hover:text-[#fac826] transition pb-1"  
          active-class="text-[#fac826] border-b-2 border-[#fac826]"
            to="/products"
            >Products</NuxtLink
          >
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center hover:bg-amber-100 text-[#d0a465] p-2 rounded-md"
        >
          <NuxtLink
          class="hover:text-[#fac826] transition pb-1"  
          active-class="text-[#fac826] border-b-2 border-[#fac826]"
            to="/contact"
            >Contact</NuxtLink
          >
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center hover:bg-amber-100 text-[#d0a465] p-2 rounded-md"
        >
          <NuxtLink
          class="hover:text-[#fac826] transition pb-1"  
          active-class="text-[#fac826] border-b-2 border-[#fac826]"
            to="/blog"
            >Blog</NuxtLink
          >
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center hover:bg-amber-100 text-[#d0a465] p-2 rounded-md"
        >
          <NuxtLink
          class="hover:text-[#fac826] transition pb-1"  
          active-class="text-[#fac826] border-b-2 border-[#fac826]"
            to="/blog/tags"
            >Tags</NuxtLink
          >
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center hover:bg-amber-100 text-[#d0a465] p-2 rounded-md"
        >
          <NuxtLink
          class="hover:text-[#fac826] transition pb-1"  
          active-class="text-[#fac826] border-b-2 border-[#fac826]"
            to="/faq"
            >FAQ</NuxtLink
          >
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<style scoped>
.text-amber-600:hover {
  color: #d97706;
}

.dropdown-item {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
