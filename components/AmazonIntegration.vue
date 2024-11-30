<script setup>

      const reviews=[
        {
          id: 1,
          title: "Great Product!",
          text: "I love this coffee grinder. It's efficient and stylish.",
          rating: 5,
          date: "November 20, 2024",
        },
        {
          id: 2,
          title: "Good value for money",
          text: "Works well, but it’s a bit loud. Overall, I’m happy with the purchase.",
          rating: 4,
          date: "November 15, 2024",
        },
      ];
</script>

<template>
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-20">
 
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-4">
          Find us on Amazon
        </h2>
  
    
        <div class="text-center">
          <a
            href="https://www.amazon.com/dp/your-product-id"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block px-6 py-3 bg-amber-600 text-white font-medium text-lg rounded-md shadow-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            Buy Now on Amazon
          </a>
        </div>
  
   
        <div class="mt-16">
          <h3 class="text-xl font-semibold text-gray-700 text-center mb-4">
            Customer Reviews
          </h3>
          <div class="bg-white shadow rounded-lg p-6">
           
            <ul>
              <li v-for="review in reviews" :key="review.id" class="mb-6 border-b pb-4">
                <p class="text-gray-800 font-medium mb-2">{{ review.title }}</p>
                <p class="text-gray-600 text-sm">{{ review.text }}</p>
                <div class="flex items-center mt-2">
                  <span class="text-amber-500">
                    <i v-for="n in review.rating" :key="n" class="fas fa-star"></i>
                  </span>
                  <span class="text-gray-500 text-sm ml-2">{{ review.date }}</span>
                </div>
              </li>
            </ul>
            
            <p v-if="reviews.length === 0" class="text-gray-500 text-center">
              No reviews available. Check out the product on Amazon for more details.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
 
  
  <style scoped>
  /* Import FontAwesome for star icons */
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
  </style>
  