<script setup>
import { reset } from "@formkit/core";


useSeoMeta({
  ogDeterminer: "the",
  title: "Aroma Grinder - Contact Us",
  description: "Get in touch with Aroma Grinder for any inquiries or feedback. We value your input and are here to assist you.",
  ogTitle: "Aroma Grinder - Contact Us",
  ogDescription: "Get in touch with Aroma Grinder for any inquiries or feedback. We value your input and are here to assist you.",
})


const submitted = ref(false);
const loading = ref(false);
const errors = ref(null);
const isCaptchaValid = ref(false);
const captchaToken = ref(null);
let timeout = null;

const resetForm = () => {
  reset("contact-form");
  captchaToken.value = null;
};

const onSolveChallenge = (token) => {
  isCaptchaValid.value = true;
  captchaToken.value = token;
};

const submitHandler = async (data) => {
  try {
    clearTimeout(timeout);
    const body = { ...data, token: captchaToken.value, action: "contact" };
    loading.value = true;
    const response = await $fetch("/api/sendmail", {
      method: "POST",
      body,
    });

    submitted.value = true;

    if (response.success) {
      resetForm();
      loading.value = false;
    } else {
      errors.value = response;
      loading.value = false;
    }
  } catch (error) {
    errors.value = error;
    loading.value = false;
  } finally {
    timeout = setTimeout(() => {
      submitted.value = false;
      errors.value = null;
    }, 3000);
  }
};

</script>

<template>
  <section id="contact" class="py-20 bg-[#fffacb]">
    <div class="container mx-auto px-6 lg:px-18">
      <h1
        class="text-4xl lg:text-4xl font-bold text-[#236160] text-center mb-20"
      >
        Get in touch with Aroma Grinder
      </h1>

      <div class="max-w-lg mx-auto bg-[#d0a465] shadow-lg rounded-lg p-6">
        <FormKit
          @submit="submitHandler"
          type="form"
          id="contact-form"
          message-class="text-red-600 underline mb-2"
          :config="{ validationVisibility: 'submit' }"
          :submit-label="loading ? 'Sending...' : 'Send Message'"
          actions-class="bg-[#236160] w-[50%] text-center font-bold text-[#fffacb] px-6 py-3 rounded-md hover:text-[#fac826] transition-colors"
        >
          <FormKit
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your name"
            validation="required"
            delay="500"
            label-class="block text-sm font-medium text-[#236160]"
            input-class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#236160] focus:border-[#236160]"
            messages-class="text-red-600"
          />

          <FormKit
            type="tel"
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
            validation="required"
            delay="500"
            label-class="block text-sm font-medium text-[#236160] mt-4"
            input-class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#236160] focus:border-[#236160]"
            messages-class="text-red-600"
          />

          <FormKit
            type="text"
            name="email"
            label="Email"
            placeholder="Enter your email address"
            validation="required|email"
            delay="500"
            label-class="block text-sm font-medium text-[#236160] mt-4"
            input-class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#236160] focus:border-[#236160]"
            messages-class="text-red-600"
          />

          <FormKit
            type="text"
            name="subject"
            label="Subject"
            placeholder="Enter message subject"
            validation="required"
            delay="500"
            label-class="block text-sm font-medium text-[#236160] mt-4"
            input-class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#236160] focus:border-[#236160]"
            messages-class="text-red-600"
          />

          <FormKit
            type="textarea"
            name="message"
            label="Message"
            placeholder="Enter message text"
            validation="required"
            delay="500"
            label-class="block text-sm font-medium text-[#236160] mt-4"
            input-class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#236160] focus:border-[#236160]"
            messages-class="text-red-600 mt-[-.5rem]"
          />

          <NuxtTurnstile
            :options="{
              language: 'en',
              size: 'flexible',
              callback: (token) => {
                s;
                onSolveChallenge(token);
              },
            }"
            v-model="captchaToken"
          />
        </FormKit>

        <p v-if="submitted && !errors" class="text-green-600 font-bold mt-4">
          Message sent successfully!
        </p>
        <p v-if="errors" class="text-red-600 mt-4">{{ errors }}</p>
      </div>

      <div class="text-center mt-24">
        <h3 class="text-xl font-semibold text-[#236160] mb-4">Follow Us</h3>
        <div class="flex justify-center space-x-6">
          <NuxtLink
            to="https://instagram.com/aromagrinder"
            target="_blank"
            class="text-amber-600 hover:text-amber-800 text-lg font-medium"
          >
            Instagram
          </NuxtLink>
          <NuxtLink
            to="https://facebook.com/aromagrinder"
            target="_blank"
            class="text-amber-600 hover:text-amber-800 text-lg font-medium"
          >
            Facebook
          </NuxtLink>
        </div>
      </div>

      <div class="text-center mt-6">
        <p class="text-gray-600">
          Have questions? Contact us at
          <a
            href="mailto:info@aromagrinder.com"
            class="text-amber-600 hover:underline"
            >info@aromagrinder.com</a
          >
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
