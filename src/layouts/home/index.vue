<script setup lang="ts">
import MenuNavigator from './components/menu-navigator.vue';
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <h2 class="text-3xl font-bold">Home</h2>
    <menu-navigator class="absolute bottom-0" />
  </div>
</template>
