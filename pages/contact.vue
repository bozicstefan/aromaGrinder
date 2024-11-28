<script setup>
import { reset } from "@formkit/core";

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

// TODO
// Add pending loader
</script>

<template>
  <section id="contact" class="py-12 bg-amber-50">
    <div class="container mx-auto px-6 lg:px-20">
      <h2
        class="text-3xl lg:text-4xl font-bold text-amber-700 text-center mb-8"
      >
        Contact Us
      </h2>

      <div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <FormKit
          @submit="submitHandler"
          type="form"
          id="contact-form"
          message-class="text-red-500 mt-2 underline"
          :config="{ validationVisibility: 'submit' }"
          :submit-label="loading ? 'Sending...' : 'Send Message'"
          actions-class="bg-amber-600 w-[50%] text-center text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors"
        >
          <FormKit
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your name"
            validation="required"
            delay="500"
            label-class="block text-sm font-medium text-gray-700"
            input-class="w-full mt-1 mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            messages-class="text-red-500 mt-2"
          />

          <FormKit
            type="tel"
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
            validation="required"
            delay="500"
            label-class="block text-sm font-medium text-gray-700"
            input-class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            messages-class="text-red-500 mt-2"
          />

          <FormKit
            type="text"
            name="email"
            label="Email"
            placeholder="Enter your email address"
            validation="required|email"
            delay="500"
            label-class="block text-sm font-medium text-gray-700 mt-4"
            input-class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            messages-class="text-red-500 mt-2"
          />

          <FormKit
            type="text"
            name="subject"
            label="Subject"
            placeholder="Enter message subject"
            validation="required"
            delay="500"
            label-class="block text-sm font-medium text-gray-700 mt-4"
            input-class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            messages-class="text-red-500 mt-2"
          />

          <FormKit
            type="textarea"
            name="message"
            label="Message"
            placeholder="Enter message text"
            validation="required"
            delay="500"
            label-class="block text-sm font-medium text-gray-700 mt-4"
            input-class="w-full mt-1  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            messages-class="text-red-500 mt-2"
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

        <p v-if="submitted && !errors" class="text-green-500 mt-4">
          Message sent successfully!
        </p>
        <p v-if="errors" class="text-red-500 mt-4">{{ errors }}</p>
      </div>

      <div class="text-center mt-10">
        <h3 class="text-xl font-semibold text-amber-700 mb-4">Follow Us</h3>
        <div class="flex justify-center space-x-6">
          <a
            href="https://instagram.com/aromagrinder"
            target="_blank"
            class="text-amber-600 hover:text-amber-800 text-lg font-medium"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/aromagrinder"
            target="_blank"
            class="text-amber-600 hover:text-amber-800 text-lg font-medium"
          >
            Facebook
          </a>
        </div>
      </div>

      <div class="text-center mt-6">
        <p class="text-gray-700">
          Have questions? Contact us at
          <a
            href="mailto:support@aromagrinder.com"
            class="text-amber-600 hover:underline"
            >support@aromagrinder.com</a
          >.
        </p>
      </div>
    </div>
  </section>
  <AmazonIntegration />
</template>

<style scoped></style>
