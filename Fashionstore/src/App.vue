<script setup>
import { useRoute } from "vue-router";
import Footer from "./components/Footer.vue";
import Header from "./components/header.vue";

const route = useRoute();
</script>

<template>
  <!-- ẨN HEADER/FOOTER Ở LOGIN -->
  <Header v-if="route.name !== 'login'" />

  <router-view />

  <Footer v-if="route.name !== 'login'" />
</template>
