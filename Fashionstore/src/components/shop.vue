<template>
  <div class="#bg-[#f5f0e8] min-h-screen text-[#1a1a1a] pt-20">
    <!-- HERO -->

    <!-- FILTER -->
    <div
      class="bg-white border-y border-gray-200 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-6 flex justify-between items-center text-sm border-b border-gray-300"
    >
      <div class="flex gap-6 items-center">
        <button
          @click="handelOpenAll"
          class="text-[#d4af37] border-b border-[#d4af37] pb-1"
        >
          Tất cả
        </button>

        <button @click="handelOpenNam" class="hover:text-[#d4af37] transition">
          Thời Trang nam
        </button>

        <button @click="handelOpenNu" class="hover:text-[#d4af37] transition">
          Thời Trang nữ
        </button>

        <!-- <select
          class="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
        >
          <option>Quý tộc</option>
          <option>Lịch lãm</option>
          <option>Pháp</option>
          <option>Thụy Điển</option>
          <option>Hy Lạp</option>
          <option>Bình dân</option>
        </select> -->
      </div>

      <span class="text-gray-500 hidden sm:inline"> Newest Releases </span>
    </div>

    <!-- PRODUCTS -->
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
    <menFashion v-show="openNam" />
    <!-- sticknu -->
    <girlFashion v-show="openNu" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import menFashion from "./menFashion.vue";
import girlFashion from "./girlFashion.vue";
const openall = ref(true);
const openNam = ref(false);
const openNu = ref(false);
const handelOpenAll = () => {
  openall.value = true;
  openNam.value = false;
  openNu.value = false;
};
const handelOpenNam = () => {
  openall.value = false;
  openNam.value = true;
  openNu.value = false;
};
const handelOpenNu = () => {
  openall.value = false;
  openNam.value = false;
  openNu.value = true;
};
const watches = ref([
  {
    name: "Vanguard Chrono",
    price: "52.400 USD",
    image: "../img/nam1.jpg",
  },

  {
    name: "Royal Heritage",
    price: "46.000 USD",
    image: "/img/nam2.jpg",
  },

  {
    name: "Abyssal Deep",
    price: "38.900 USD",
    image: "/img/nam3.jpg",
  },

  {
    name: "Lunar Phase",
    price: "53.900 USD",
    image: "/img/nu3.jpg",
  },
  {
    name: "Abyssal Deep",
    price: "38.900 USD",
    image: "/img/nu4.jpg",
  },

  {
    name: "Lunar Phase",
    price: "53.900 USD",
    image: "/img/nu5.jpg",
  },
  {
    name: "Abyssal Deep",
    price: "38.900 USD",
    image: "/img/nu1.jpg",
  },

  {
    name: "Lunar Phase",
    price: "53.900 USD",
    image: "/img/nu4.jpg",
  },
  {
    name: "Abyssal Deep",
    price: "38.900 USD",
    image: "/img/nam4.jpg",
  },
  {
    name: "Abyssal Deep",
    price: "38.900 USD",
    image: "/img/nu5.jpg",
  },
  {
    name: "Abyssal Deep",
    price: "38.900 USD",
    image: "/img/nu6.jpg",
  },
  {
    name: "Abyssal Deep",
    price: "38.900 USD",
    image: "/img/nam7.jpg",
  },
]);
</script>
