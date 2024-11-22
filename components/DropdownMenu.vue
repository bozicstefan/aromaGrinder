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
      class="md:hidden rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-grass11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black"
      aria-label="Customise options"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 448 512"
      >
        <path
          fill="black"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16m0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16m0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16"
        />
      </svg>
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="w-[160px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        :side-offset="5"
      >
        <DropdownMenuItem
          class="text-center hover:text-red">
          <NuxtLink to="/">Home</NuxtLink>
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center">
          <NuxtLink to="/about-us">About</NuxtLink>
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center"
        >
          <NuxtLink to="/products">Products</NuxtLink>
        </DropdownMenuItem>

        <DropdownMenuItem
          class="text-center"
        >
          <NuxtLink to="/contact">Contact</NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem
          class="text-center"
        >
          <NuxtLink to="/blog">Blog</NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem
          class="text-center"
        >
          <NuxtLink to="/faq">FAQ</NuxtLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
