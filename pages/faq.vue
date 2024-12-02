<script setup>

useSeoMeta({
  title: "Aroma Grinder - FAQ",
  description: "Discover the answers to frequently asked questions about Aroma Grinder and our coffee brewing products.",
  ogTitle: "Aroma Grinder - FAQ",
  ogDescription: "Discover the answers to frequently asked questions about Aroma Grinder and our coffee brewing products.",
})

const faqs = [
  {
    question: "How do I use the Aroma Grinder?",
    answer:
      "To use the Aroma Grinder, simply load your favorite coffee beans, adjust the grind size, and start the process for freshly ground coffee.",
  },
  {
    question: "Is there a warranty for the Aroma Grinder?",
    answer: "Yes, the Aroma Grinder comes with a 12-month warranty for manufacturing defects.",
  },
  {
    question: "Can I grind all types of coffee beans?",
    answer: "Yes, the Aroma Grinder is designed to handle all types of coffee beans, from light roast to dark roast.",
  },
  {
    question: "Is this product available on Amazon?",
    answer: "Yes, the Aroma Grinder is available on Amazon for convenient purchasing.",
  },
  {
    question: "What makes the Aroma Grinder unique?",
    answer:
      "The Aroma Grinder is equipped with precision stainless steel burrs that ensure consistent grinding for optimal flavor extraction.",
  },
  {
    question: "Can the Aroma Grinder be used as a coffee mill?",
    answer: "Yes, the Aroma Grinder functions as both a coffee grinder and a coffee mill for versatility.",
  },
  {
    question: "How do I clean the Aroma Grinder?",
    answer:
      "The Aroma Grinder can be cleaned by disassembling the removable parts and using a soft brush to clear out leftover coffee grounds.",
  },
  {
    question: "What grind sizes can the Aroma Grinder produce?",
    answer:
      "The Aroma Grinder offers multiple grind settings, including fine for espresso, medium for drip coffee, and coarse for French press.",
  },
  {
    question: "Does the Aroma Grinder work with electric power?",
    answer: "The Aroma Grinder is a manual coffee grinder, requiring no electricity.",
  },
  {
    question: "How portable is the Aroma Grinder?",
    answer:
      "The Aroma Grinder is compact and lightweight, making it ideal for home use, travel, and outdoor adventures.",
  },
  {
    question: "Can I gift the Aroma Grinder?",
    answer: "Absolutely! The Aroma Grinder is a perfect gift for coffee enthusiasts.",
  },
  {
    question: "Does the Aroma Grinder preserve the coffee's aroma?",
    answer:
      "Yes, the grinder's design minimizes heat during grinding to preserve the natural aroma and flavor of coffee beans.",
  },
  {
    question: "Can I order spare parts for the Aroma Grinder on Amazon?",
    answer: "Yes, spare parts for the Aroma Grinder are available on Amazon.",
  },
  {
    question: "What materials are used in the Aroma Grinder?",
    answer: "The Aroma Grinder is made from stainless steel and durable ceramic components.",
  },
  {
    question: "Is the Aroma Grinder eco-friendly?",
    answer:
      "Yes, the Aroma Grinder's manual operation means no electricity is needed, making it an environmentally friendly choice.",
  },
  {
    question: "Can I use the Aroma Grinder for spices?",
    answer: "The Aroma Grinder is designed specifically for coffee beans, but it can be used for spices with care.",
  },
  {
    question: "Is the Aroma Grinder suitable for Turkish coffee?",
    answer: "Yes, the Aroma Grinder can produce an ultra-fine grind ideal for Turkish coffee.",
  },
  {
    question: "Does the coffee mill include a storage container?",
    answer: "Yes, the Aroma Grinder includes a built-in container to collect ground coffee.",
  },
  {
    question: "How long does it take to grind coffee with the Aroma Grinder?",
    answer:
      "It typically takes 1-2 minutes to grind enough coffee for a single serving, depending on the grind size.",
  },
  {
    question: "Where can I buy the Aroma Grinder besides Amazon?",
    answer: "The Aroma Grinder is also available on our official website and select retail stores.",
  },
  {
    question: "Can the Aroma Grinder handle oily coffee beans?",
    answer:
      "Yes, the Aroma Grinder is capable of grinding oily coffee beans, but regular cleaning is recommended to maintain performance.",
  },
  {
    question: "What is the capacity of the Aroma Grinder?",
    answer:
      "The Aroma Grinder can hold approximately 35 grams of coffee beans, enough for 2-3 cups of coffee.",
  },
  {
    question: "Does the Aroma Grinder come assembled?",
    answer:
      "Yes, the Aroma Grinder arrives fully assembled and ready to use straight out of the box.",
  },
  {
    question: "Is the Aroma Grinder reviewed on Amazon?",
    answer:
      "Yes, the Aroma Grinder has numerous positive reviews on Amazon, praising its build quality and performance.",
  },
  {
    question: "What is the difference between a coffee grinder and a coffee mill?",
    answer:
      "A coffee grinder and a coffee mill serve the same purpose; however, 'coffee mill' often refers to manual grinders like the Aroma Grinder.",
  },
  {
    question: "What kind of burrs does the Aroma Grinder use?",
    answer: "The Aroma Grinder uses durable ceramic burrs for consistent and precise grinding.",
  },
  {
    question: "Is the Aroma Grinder quiet during operation?",
    answer: "Yes, the Aroma Grinder is designed to operate quietly, making it ideal for early mornings.",
  },
  {
    question: "Can I find replacement burrs for the Aroma Grinder on Amazon?",
    answer:
      "Yes, replacement burrs for the Aroma Grinder are available on Amazon for your convenience.",
  },
  {
    question: "Does the Aroma Grinder retain coffee grounds?",
    answer:
      "The Aroma Grinder minimizes retention with a simple, easy-to-clean design.",
  },
  {
    question: "Can I adjust the grind size on the Aroma Grinder?",
    answer:
      "Yes, the Aroma Grinder features an adjustable setting for fine, medium, and coarse grinds.",
  },
  {
    question: "What is the shipping time for the Aroma Grinder on Amazon?",
    answer:
      "Shipping times for the Aroma Grinder depend on your location, but Amazon typically delivers within 2-5 business days.",
  },
  {
    question: "Is the Aroma Grinder easy to travel with?",
    answer:
      "Yes, the Aroma Grinder’s lightweight and compact design make it an excellent travel companion for coffee lovers.",
  },
  {
    question: "Does the Aroma Grinder include a grind size guide?",
    answer:
      "Yes, the Aroma Grinder includes a user manual with recommendations for grind sizes based on brewing methods.",
  },
  {
    question: "What brewing methods work best with the Aroma Grinder?",
    answer:
      "The Aroma Grinder is perfect for espresso, drip coffee, French press, Aeropress, and pour-over methods.",
  },
  {
    question: "What is the warranty claim process for the Aroma Grinder?",
    answer:
      "You can claim the warranty by contacting our support team or the Amazon seller directly with proof of purchase.",
  },
  {
    question: "Is the Aroma Grinder compatible with the Aeropress?",
    answer:
      "Yes, the Aroma Grinder is an excellent match for the Aeropress, providing a consistent medium grind.",
  },
  {
    question: "How does the Aroma Grinder compare to electric grinders?",
    answer:
      "The Aroma Grinder offers precise, quiet, and eco-friendly grinding, ideal for manual coffee enthusiasts.",
  },
  {
    question: "Does the Aroma Grinder include a coffee bean scoop?",
    answer: "Yes, the Aroma Grinder comes with a complimentary coffee bean scoop for easy measurement.",
  },
  {
    question: "Is the Aroma Grinder safe for children to use?",
    answer:
      "While the Aroma Grinder is safe to handle, adult supervision is recommended for children due to its sharp burrs.",
  },
  {
    question: "What type of coffee grinder is best for French press coffee?",
    answer:
      "A manual coffee grinder like the Aroma Grinder is perfect for French press, providing a consistent coarse grind.",
  },
  {
    question: "How does the Aroma Grinder help preserve coffee freshness?",
    answer:
      "The Aroma Grinder’s manual operation produces minimal heat, preserving the natural oils and flavors of the coffee beans.",
  },
  {
    question: "Is the Aroma Grinder suitable for grinding nuts or seeds?",
    answer:
      "The Aroma Grinder is designed for coffee beans, and using it for nuts or seeds may reduce its efficiency.",
  },
  {
    question: "Does the Aroma Grinder include a cleaning brush?",
    answer:
      "Yes, the Aroma Grinder comes with a cleaning brush to maintain its performance and hygiene.",
  },
  {
    question: "Can I grind coffee directly into a French press with the Aroma Grinder?",
    answer:
      "Yes, the Aroma Grinder allows you to grind coffee directly into a French press for convenience.",
  },
  {
    question: "Is the Aroma Grinder sold in other online stores besides Amazon?",
    answer:
      "The Aroma Grinder is primarily sold on Amazon but may also be available on select coffee specialty websites.",
  },
  {
    question: "How long does the Aroma Grinder last with regular use?",
    answer:
      "With proper care, the Aroma Grinder can last several years, thanks to its durable materials.",
  },
  {
    question: "Does the Aroma Grinder come in different colors or finishes?",
    answer:
      "Currently, the Aroma Grinder is available in a sleek stainless steel finish, complementing any kitchen decor.",
  },
];
</script>

<template>
  <section class="bg-amber-100 py-20">
    <div class="container mx-auto px-6 lg:px-16">

      <h1 class="text-4xl font-semibold text-[#236160] mb-20 text-center">
        Frequently Asked Questions
      </h1>


      <div class="space-y-6">
        <details v-for="(faq, index) in faqs" :key="index" class="bg-white p-4 rounded shadow-sm">
          <summary class="cursor-pointer font-medium text-amber-800">
            {{ faq.question }}
          </summary>
          <p class="mt-2 text-amber-700">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </section>
  <AmazonIntegration />
</template>



<style scoped>
summary::marker {
  color: #d97706;
}

.bg-amber-50 {
  background-color: #fff7ed;
}
.text-amber-900 {
  color: #78350f;
}
.text-amber-800 {
  color: #854d0e;
}
.text-amber-700 {
  color: #92400e;
}
</style>
