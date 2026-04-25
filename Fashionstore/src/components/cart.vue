<template>
  <div class="md:min-h-195 bg-[#f5f6f8 ] text-gray-800 p-6 pt-25">
    <!-- HEADER -->
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-2xl font-semibold tracking-wide text-[#2c2c2c]">
          Cart Dashboard
        </h1>
        <p class="text-gray-500 text-sm">Manage your selected products</p>
      </div>

      <div class="bg-[#2c2c2c] text-white px-4 py-2 rounded-full text-sm">
        Items: {{ totalItems }}
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <!-- LEFT -->
      <div class="lg:col-span-2 space-y-4">
        <div
          v-for="(item, index) in cart"
          :key="index"
          class="bg-[#faf9f6] p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow transition"
        >
          <!-- INFO -->
          <div class="flex items-center gap-4">
            <img :src="item.image" class="w-14 h-14 rounded-lg object-cover" />

            <div>
              <h3 class="font-medium text-[#2c2c2c]">{{ item.name }}</h3>
              <p class="text-xs text-gray-400">
                {{ item.color }} • {{ item.size }}
              </p>
            </div>
          </div>

          <!-- QTY -->
          <div
            class="flex items-center border border-gray-300 rounded-md overflow-hidden"
          >
            <button
              @click="decreaseQty(index)"
              class="px-3 py-1 hover:bg-gray-100"
            >
              -
            </button>

            <span class="px-3">{{ item.qty }}</span>

            <button
              @click="increaseQty(index)"
              class="px-3 py-1 hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <!-- PRICE -->
          <div class="text-right">
            <p class="font-semibold text-[#2c2c2c]">
              ${{ (item.price * item.qty).toLocaleString() }}
            </p>

            <button
              @click="removeItem(index)"
              class="text-xs text-gray-400 hover:text-red-500"
            >
              remove
            </button>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div
        class="bg-[#faf9f6] p-6 rounded-xl shadow-sm h-fit border border-gray-200"
      >
        <h2 class="text-lg font-semibold mb-4 text-[#2c2c2c]">Summary</h2>

        <div class="space-y-3 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-500">Subtotal</span>
            <span>${{ subtotal.toLocaleString() }}</span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500">Shipping</span>
            <span>$10</span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500">Tax</span>
            <span>$5</span>
          </div>
        </div>

        <div class="border-t my-4"></div>

        <div class="flex justify-between text-lg font-semibold text-[#2c2c2c]">
          <span>Total</span>
          <span>${{ total.toLocaleString() }}</span>
        </div>

        <button
          class="w-full mt-6 bg-[#2c2c2c] text-white py-3 rounded-lg hover:bg-black transition"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const cart = ref([
  {
    name: "Hoodie Black",
    color: "Black",
    size: "M",
    price: 120,
    qty: 1,
    image: "https://picsum.photos/100?1",
  },
  {
    name: "Street Jacket",
    color: "Grey",
    size: "L",
    price: 200,
    qty: 1,
    image: "https://picsum.photos/100?2",
  },
]);

const increaseQty = (i) => cart.value[i].qty++;

const decreaseQty = (i) => {
  if (cart.value[i].qty > 1) cart.value[i].qty--;
};

const removeItem = (i) => {
  cart.value.splice(i, 1);
};

const subtotal = computed(() =>
  cart.value.reduce((s, i) => s + i.price * i.qty, 0),
);

const total = computed(() => subtotal.value + 15);

const totalItems = computed(() => cart.value.reduce((s, i) => s + i.qty, 0));
</script>
