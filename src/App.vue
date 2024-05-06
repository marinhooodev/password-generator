<script setup lang="ts">

import { RouterView } from 'vue-router'
import AppHeader from './components/Defaults/AppHeader.vue';
import AppFooter from './components/Defaults/AppFooter.vue';
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<style scoped>
</style>
