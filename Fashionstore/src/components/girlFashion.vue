<template>
  <section
    v-show="openall"
    class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  >
    <div
      v-for="watch in watches"
      :key="watch.name"
      class="group bg-white rounded-lg overflow-hidden"
    >
      <!-- IMAGE -->
      <div class="relative overflow-hidden">
        <img
          :src="watch.image"
          class="w-full h-[320px] object-cover transition duration-500 group-hover:scale-105"
        />

        <!-- overlay khi hover -->
        <div
          class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"
        ></div>

        <!-- nút quick add -->
        <button
          class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 text-xs opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300"
        >
          Thêm vào giỏ
        </button>
      </div>

      <!-- INFO -->
      <div class="p-3">
        <h3 class="text-sm font-medium">{{ watch.name }}</h3>
        <p class="text-gray-500 text-sm mt-1">${{ watch.price }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const watches = [
  {
    name: "Vanguard Chrono",
    price: "52.400 USD",
    image: "../img/nu1.jpg",
  },
  {
    name: "Vanguard Chrono",
    price: "52.400 USD",
    image: "../img/nu2.jpg",
  },
  {
    name: "Vanguard Chrono",
    price: "52.400 USD",
    image: "../img/nu3.jpg",
  },
  {
    name: "Vanguard Chrono",
    price: "52.400 USD",
    image: "../img/nu4.jpg",
  },
  {
    name: "Vanguard Chrono",
    price: "52.400 USD",
    image: "../img/nu5.jpg",
  },
  {
    name: "Vanguard Chrono",
    price: "52.400 USD",
    image: "../img/nu6.jpg",
  },
  {
    name: "Vanguard Chrono",
    price: "52.400 USD",
    image: "../img/nu7.jpg",
  },
  {
    name: "Vanguard Chrono",
    price: "52.400 USD",
    image: "../img/nu8.jpg",
  },
  {
    name: "Vanguard Chrono",
    price: "52.400 USD",
    image: "../img/nu9.jpg",
  },
];
</script>
