<template>
  <div>
    <header
      class="flex fixed z-50 w-full bg-[#f5f0e8] justify-between items-center px-6 md:px-10 py-4"
    >
      <!-- Logo -->
      <h1 class="text-xl tracking-widest">MinhQuan Store</h1>

      <!-- Desktop Menu -->
      <nav class="space-x-6 hidden md:block">
        <router-link
          to="/"
          class="relative text-[18px] font-medium transition-all duration-300 hover:text-gray-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
          >Home</router-link
        >
        <router-link
          to="/store"
          class="relative text-[18px] font-medium transition-all duration-300 hover:text-gray-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          Shop
        </router-link>
        <router-link
          to="/store"
          class="relative text-[18px] font-medium transition-all duration-300 hover:text-gray-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          Collections
        </router-link>
        <router-link
          to="/store"
          class="relative text-[18px] font-medium transition-all duration-300 hover:text-gray-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </router-link>
      </nav>

      <!-- Right icons -->
      <div class="flex items-center space-x-4">
        <!-- Mobile button -->
        <button
          class="md:hidden text-2xl relative w-8 h-8 flex items-center justify-center"
          @click="openMenu = !openMenu"
        >
          <!-- Hamburger -->
          <span
            class="absolute transition-all duration-300"
            :class="
              openMenu
                ? 'opacity-0 rotate-180 scale-75'
                : 'opacity-100 rotate-0 scale-100'
            "
          >
            ☰
          </span>

          <!-- Close -->
          <span
            class="absolute transition-all duration-300"
            :class="
              openMenu
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-180 scale-75'
            "
          >
            ✕
          </span>
        </button>
        <router-link to="/login"
          ><span class="hidden md:inline"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg> </span
        ></router-link>

        <router-link to="/cart"
          ><span class="hidden md:inline"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg> </span
        ></router-link>
      </div>
    </header>

    <!-- BACKDROP -->
    <transition name="fade">
      <div
        v-if="openMenu"
        class="fixed inset-0 z-40 bg-black/50"
        @click="openMenu = false"
      ></div>
    </transition>

    <!-- MOBILE MENU -->
    <transition name="slide">
      <div
        v-if="openMenu"
        class="fixed top-0 left-0 z-50 h-full w-3/4 max-w-sm bg-[#f5f0e8] p-6 shadow-xl"
      >
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg tracking-widest">MENU</h2>
          <button @click="openMenu = false" class="text-xl">✕</button>
        </div>

        <nav class="flex flex-col space-y-5 text-lg">
          <router-link to="/" class="hover:text-gray-500">Home</router-link>
          <router-link to="/store" class="hover:text-gray-500">
            Shop
          </router-link>

          <router-link to="/login"><span class="">👤</span></router-link>

          <router-link to="/cart"><span class="">🛒</span></router-link>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openMenu = ref(false);
</script>

<style>
/* BACKDROP FADE */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* SLIDE MENU */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.35s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
