<template>
  <div class="md:min-h-195 bg-[#f5f6f8 ] text-gray-800 p-6 pt-25">
    <!-- HEADER -->
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10"
    >
      <div>
        <h1 class="text-3xl font-bold tracking-tight text-[#1f1f1f]">
          Cart Dashboard
        </h1>

        <p class="text-gray-500 mt-1">Manage your selected products easily</p>
      </div>

      <div
        class="bg-[#1f1f1f] text-white px-5 py-3 rounded-2xl shadow-md text-sm font-medium w-fit"
      >
        🛒 {{ totalItems }} Items
      </div>
    </div>

    <!-- GRID -->
    <div class="grid lg:grid-cols-3 gap-8">
      <!-- LEFT -->
      <div class="lg:col-span-2 space-y-5">
        <div
          v-for="(item, index) in cart"
          :key="index"
          class="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <!-- PRODUCT -->
          <div class="flex items-center gap-5">
            <img
              :src="item.image"
              class="w-24 h-24 rounded-2xl object-cover shadow-md"
            />

            <div>
              <h3 class="text-lg font-semibold text-[#222]">
                {{ item.name }}
              </h3>

              <p class="text-sm text-gray-400 mt-1">
                {{ item.color }} • Size {{ item.size }}
              </p>

              <p class="text-sm text-gray-500 mt-2">
                ${{ item.price.toLocaleString() }}
              </p>
            </div>
          </div>

          <!-- ACTION -->
          <div class="flex items-center gap-6">
            <!-- QTY -->
            <div
              class="flex items-center bg-gray-100 rounded-xl overflow-hidden border border-gray-200"
            >
              <button
                @click="decreaseQty(index)"
                class="w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition text-lg"
              >
                −
              </button>

              <span class="w-10 text-center font-medium">
                {{ item.qty }}
              </span>

              <button
                @click="increaseQty(index)"
                class="w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition text-lg"
              >
                +
              </button>
            </div>

            <!-- PRICE -->
            <div class="text-right min-w-[100px]">
              <p class="text-lg font-bold text-[#1f1f1f]">
                ${{ (item.price * item.qty).toLocaleString() }}
              </p>

              <button
                @click="removeItem(index)"
                class="text-sm text-gray-400 hover:text-red-500 transition mt-1"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div
        class="bg-white/90 backdrop-blur-md rounded-3xl p-7 shadow-xl border border-gray-200 h-fit sticky top-24"
      >
        <h2 class="text-2xl font-bold text-[#222] mb-6">Order Summary</h2>

        <div class="space-y-4 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-500">Subtotal</span>

            <span class="font-medium"> ${{ subtotal.toLocaleString() }} </span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500">Shipping</span>

            <span class="font-medium">$10</span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500">Tax</span>

            <span class="font-medium">$5</span>
          </div>
        </div>

        <div class="border-t border-dashed my-6"></div>

        <div class="flex justify-between items-center">
          <span class="text-lg font-semibold">Total</span>

          <span class="text-3xl font-bold text-[#1f1f1f]">
            ${{ total.toLocaleString() }}
          </span>
        </div>

        <button
          class="w-full mt-8 bg-[#1f1f1f] hover:bg-black text-white py-4 rounded-2xl font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          Checkout Now
        </button>

        <p class="text-xs text-gray-400 text-center mt-4">
          Secure payment & fast delivery
        </p>
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
    image: "https://picsum.photos/200?1",
  },
  {
    name: "Street Jacket",
    color: "Grey",
    size: "L",
    price: 200,
    qty: 1,
    image: "https://picsum.photos/200?2",
  },
]);

const increaseQty = (i) => {
  cart.value[i].qty++;
};

const decreaseQty = (i) => {
  if (cart.value[i].qty > 1) {
    cart.value[i].qty--;
  }
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
