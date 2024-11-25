<script setup>
import { reset } from "@formkit/core";

const email = ref("");
const visible = ref(false);

const submitted = ref(false);
const errors = ref(null);

const config = useRuntimeConfig();
const siteKey = config.public.SITE_KEY;
const isCaptchaValid = ref(false);
const captchaToken = ref(null);
let timeout = null;

const resetForm = () => {
  reset("contact-form");
  email.value = "";
  captchaToken.value = null;
};

const handleFormSubmit = async () => {
  try {
    const res = await $fetch("/api/sendmail", {
      method: "POST",
      body: {
        action: "subscribe",
        token: captchaToken.value,
        email: email.value,
      },
    });

    if (res.success) {
      submitted.value = true;
      resetForm();
      timeout = setTimeout(() => closeModal(), 2000);
    } else {
      errors.value = res;
    }
  } catch (error) {
    errors.value = error;
  } finally {
    timeout = setTimeout(() => {
      submitted.value = false;
      errors.value = null;
    }, 2000);
  }
};

const closeModal = () => {
  clearTimeout(timeout);
  visible.value = false;
};

const openModal = () => {
  visible.value = true;
};

onMounted(() => {
  const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
  openModal();
  localStorage.setItem("hasVisited", "true");
    }
});

const onSolveChallenge = (token) => {
  isCaptchaValid.value = true;
  captchaToken.value = token;
};
</script>

<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
  >
    <div class="bg-amber-100 rounded-lg shadow-lg p-6 relative max-w-md w-full">
      <button
        class="absolute top-3 right-3 text-amber-600 hover:text-amber-800 focus:outline-none"
        @click="closeModal"
        aria-label="Close"
      >
        ✖
      </button>

      <h3 class="text-xl font-semibold text-amber-800 mb-4">
        Subscribe to Our Newsletter
      </h3>

      <FormKit
        id="contact-form"
        type="form"
        @submit="handleFormSubmit"
        class="space-y-4"
        submit-label="Subscribe"
        actions-class="w-full mt-4 text-center bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 focus:ring focus:ring-amber-400 focus:outline-none transition"
        messages-class="text-red-500 mt-2 underline"
      >
        <FormKit
          v-model="email"
          type="email"
          name="email"
          label="Your Email"
          placeholder="Enter your email"
          validation="required|email"
          input-class="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring focus:ring-amber-400 focus:outline-none placeholder-amber-500"
          label-class="block text-sm font-medium text-amber-700 mb-1"
          message-class="text-red-500 mt-2"
        />
        <NuxtTurnstile
          :options="{
            language: 'en',
            size: 'flexible',
            callback: (token) => {
              onSolveChallenge(token);
            },
          }"
          v-model="captchaToken"
        />
      </FormKit>
      <p v-if="submitted && !errors" class="text-green-500 mt-4">
        Message sent successfully!
      </p>
      <p v-if="errors" class="text-red-500 mt-4">{{ errors }}</p>
    </div>
  </div>
</template>
