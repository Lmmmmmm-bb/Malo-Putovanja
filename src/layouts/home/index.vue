<script setup lang="ts">
import { NButton } from 'naive-ui';
import { useRouter } from 'vue-router';
import styles from './index.module.scss';
import { useCounterStore } from '@/store';

const router = useRouter();
const countStore = useCounterStore();
</script>

<template>
  <div :class="styles.wrapper">
    <h2 class="text-3xl font-bold">Home</h2>
    <p class="text-2xl">
      count: {{ countStore.count }}, double: {{ countStore.double }}
    </p>
    <div>
      <n-button type="primary" @click="countStore.count++">+</n-button>
      <n-button type="primary" @click="countStore.count--">-</n-button>
    </div>
    <n-button type="primary" @click="router.push({ name: 'about' })">
      To About
    </n-button>
  </div>
</template>
