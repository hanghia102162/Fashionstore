<template>
  <div class="min-h-screen flex items-center justify-center bg-[#f8f8f8]">
    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
      <!-- Title -->
      <h2 class="text-2xl font-semibold text-center mb-6">Đăng nhập</h2>

      <!-- Email -->
      <div class="mb-4">
        <label class="block text-sm mb-1">Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="Nhập email..."
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <!-- Password -->
      <div class="mb-4">
        <label class="block text-sm mb-1">Mật khẩu</label>
        <input
          v-model="password"
          type="password"
          placeholder="Nhập mật khẩu..."
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <!-- Error -->
      <p v-if="error" class="text-red-500 text-sm mb-3">
        {{ error }}
      </p>

      <!-- Button -->
      <button
        @click="handleLogin"
        class="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-400 transition"
      >
        Đăng nhập
      </button>

      <!-- Extra -->
      <p class="text-sm text-center mt-4 text-gray-500">
        Chưa có tài khoản?
        <span class="text-pink-500 cursor-pointer hover:underline">
          Đăng ký
        </span>
      </p>
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
    error.value = "Vui lòng nhập đầy đủ thông tin";
    return;
  }

  // fake login (demo)
  if (email.value === "admin@gmail.com" && password.value === "123456") {
    alert("Đăng nhập thành công!");
    error.value = "";
  } else {
    error.value = "Sai email hoặc mật khẩu";
  }
};
</script>
