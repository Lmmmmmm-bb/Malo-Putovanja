<script setup lang="ts">
import { NButton } from 'naive-ui';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold">About</h2>
    <n-button type="primary" secondary @click="router.back()">To Home</n-button>
  </div>
</template>
