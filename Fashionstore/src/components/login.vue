<template>
  <div
    class="min-h-screen flex items-center justify-center bg-[#f3f3f3] px-4 py-8"
  >
    <div
      class="w-full max-w-4xl bg-white rounded-[24px] overflow-hidden shadow-lg grid md:grid-cols-2"
    >
      <!-- Left Image -->
      <div class="hidden md:block relative h-[630px]">
        <img
          src="/img/nu2.jpg"
          class="w-full h-full object-cover object-top"
          alt=""
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        ></div>

        <!-- Content -->
        <div class="absolute bottom-0 left-0 w-full p-10 text-white">
          <p class="tracking-[4px] text-xs text-gray-300 uppercase mb-3">
            Luxury Fashion
          </p>

          <h1 class="text-4xl font-extralight leading-tight mb-4">
            FASHION <br />
            STORE
          </h1>

          <p class="text-sm text-gray-200 leading-6 max-w-xs">
            Discover modern fashion trends and timeless collections crafted for
            elegance and individuality.
          </p>
        </div>
      </div>

      <!-- Right Form -->
      <div class="flex items-center justify-center px-8 py-10 md:px-12">
        <div class="w-full max-w-sm">
          <!-- Header -->
          <div class="mb-8">
            <p class="text-xs tracking-[4px] text-gray-400 uppercase mb-3">
              Welcome Back
            </p>

            <h2 class="text-4xl font-extralight text-[#1a1a18]">Sign In</h2>
          </div>

          <!-- Email -->
          <div class="mb-6">
            <label class="block text-sm text-gray-500 mb-2"> Email </label>

            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="w-full border-b border-gray-300 py-3 text-[15px] outline-none focus:border-black transition-all duration-300 bg-transparent"
            />
          </div>

          <!-- Password -->
          <div class="mb-3">
            <label class="block text-sm text-gray-500 mb-2"> Password </label>

            <input
              v-model="password"
              type="password"
              placeholder="Enter your password"
              class="w-full border-b border-gray-300 py-3 text-[15px] outline-none focus:border-black transition-all duration-300 bg-transparent"
            />
          </div>

          <!-- Forgot -->
          <div class="flex justify-end mb-7">
            <span
              class="text-sm text-gray-500 hover:text-black cursor-pointer transition duration-300"
            >
              Forgot password?
            </span>
          </div>

          <!-- Error -->
          <p v-if="error" class="text-red-500 text-sm mb-4">
            {{ error }}
          </p>

          <!-- Button -->
          <button
            @click="handleLogin"
            class="w-full bg-black text-white py-3.5 rounded-full tracking-[2px] uppercase text-xs hover:bg-[#222] transition duration-300"
          >
            Sign In
          </button>

          <!-- Divider -->
          <div class="flex items-center gap-3 my-7">
            <div class="flex-1 h-px bg-gray-200"></div>

            <span class="text-xs text-gray-400 uppercase"> Or </span>

            <div class="flex-1 h-px bg-gray-200"></div>
          </div>

          <!-- Google Button -->
          <button
            class="w-full border border-gray-300 py-3 rounded-full text-sm hover:bg-gray-50 transition duration-300"
          >
            Continue with Google
          </button>

          <!-- Register -->
          <p class="text-sm text-center mt-8 text-gray-500">
            Don’t have an account?

            <span class="text-black cursor-pointer hover:underline ml-1">
              Create account
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const error = ref("");

const handleLogin = () => {
  if (!email.value || !password.value) {
    error.value = "Please enter all information";
    return;
  }

  if (email.value === "admin@gmail.com" && password.value === "123456") {
    alert("Login successful!");
    error.value = "";
  } else {
    error.value = "Invalid email or password";
  }
};
</script>
