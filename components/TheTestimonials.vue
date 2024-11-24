<script setup>

const Testimonials = [
  {
    text: "This coffee grinder has changed my mornings! The adjustable grind is perfect for my espresso machine.",
    author: "Alex J.",
    rating: 5,
  },
  {
    text: "Compact and durable. It's my travel companion for brewing coffee on the go!",
    author: "Maria K.",
    rating: 4,
  },
  {
    text: "A must-have for coffee lovers. It feels premium and grinds perfectly every time.",
    author: "John D.",
    rating: 5,
  },
  {
    text: "I've been using this grinder for years and it's still the best.",
    author: "Emily S.",
    rating: 5,
  },
  {
    text: "I love the ease of use and the quality of the coffee I get out of it.",
    author: "Michael B.",
    rating: 5,
  },
  {
    text: "I've been using this grinder for years and it's still the best.",
    author: "Katherine W.",
    rating: 5,
  },
  {
    text: "The stainless steel design looks great in my kitchen, and it's easy to clean too!",
    author: "Chris L.",
    rating: 4,
  },
  {
    text: "I had some doubts, but this grinder has exceeded all my expectations.",
    author: "Sophia R.",
    rating: 5,
  },
  {
    text: "It's so quiet compared to other grinders I've used, and the results are consistent.",
    author: "Daniel P.",
    rating: 5,
  },
  {
    text: "The portable design is a game-changer for camping trips. Highly recommend it!",
    author: "Rachel T.",
    rating: 5,
  },
  {
    text: "The adjustable grind settings make it versatile for French press and espresso alike.",
    author: "Liam F.",
    rating: 5,
  },
  {
    text: "Perfect for anyone who takes their coffee seriously. The grind quality is unmatched!",
    author: "Olivia H.",
    rating: 5,
  },
  {
    text: "It's lightweight but feels solid. Great for both daily use and travel.",
    author: "Ethan W.",
    rating: 4,
  },
  {
    text: "Amazing value for the price. My mornings are better with freshly ground coffee!",
    author: "Mia G.",
    rating: 5,
  },
  {
    text: "I’ve recommended this grinder to all my coffee-loving friends. It’s that good.",
    author: "Noah V.",
    rating: 5,
  },
];

const currentIndex = ref(0);

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % Testimonials.length;
};

const prevTestimonial = () => {
  currentIndex.value =
    (currentIndex.value - 1 + Testimonials.length) % Testimonials.length;
};

const currentTestimonial = computed(() => Testimonials[currentIndex.value]);
</script>

<template>
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-6 lg:px-16 text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">
        Customer Testimonials
      </h2>

      <div
        class="relative bg-white p-6 rounded-lg shadow-md mx-auto max-w-xl transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex.value * 100}%)` }"
        aria-live="polite"
      >
        <p class="text-gray-600 italic mb-4">"{{ currentTestimonial.text }}"</p>
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold text-gray-800">
            - {{ currentTestimonial.author }}
          </span>
          <div class="flex text-yellow-400">
            <span
              v-for="star in 5"
              :key="star"
              :class="
                currentTestimonial.rating >= star
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              "
            >
              ★
            </span>
          </div>
        </div>

        <div class="absolute top-1/2 -left-4 transform -translate-y-1/2">
          <button
            @click="prevTestimonial"
            class="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 16l1.4-1.4l-1.6-1.6H16v-2h-4.2l1.6-1.6L12 8l-4 4zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
              />
            </svg>
          </button>
        </div>
        <div class="absolute top-1/2 -right-4 transform -translate-y-1/2">
          <button
            @click="nextTestimonial"
            class="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="mt-12">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">
          Ready to get yours?
        </h3>
        <div class="space-x-4">
          <a
            href="https://www.amazon.com"
            target="_blank"
            class="inline-block px-6 py-3 text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg font-semibold"
          >
            Buy Now on Amazon
          </a>
          <a
            href="#"
            class="inline-block px-6 py-3 text-yellow-500 border border-yellow-500 hover:bg-yellow-50 rounded-lg font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.relative {
  transition: transform 0.5s ease-in-out;
}
</style>
