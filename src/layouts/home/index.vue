<script setup lang="ts">
import { NButton } from 'naive-ui';
import { useRouter } from 'vue-router';
import styles from './index.module.scss';

const router = useRouter();
</script>

<template>
  <div :class="styles.wrapper">
    <h2 class="text-3xl font-bold">Home</h2>
    <n-button type="primary" @click="router.push({ name: 'about' })">
      To About
    </n-button>
  </div>
</template>
