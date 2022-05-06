<script setup lang="ts">
import { useMessage } from 'naive-ui';

window.$MPMessage = useMessage();
</script>

<template>
  <router-view />
</template>
