<script setup lang="ts">
import { NMenu } from 'naive-ui';
import { useRouter } from 'vue-router';
import { RouteNameEnum } from '@/router';
import { menuOptions } from '../config';

const router = useRouter();

const handleMenuItemClick = (key: RouteNameEnum) => router.push({ name: key });
</script>

<template>
  <n-menu
    class="w-full flex justify-center"
    mode="horizontal"
    :options="menuOptions"
    @update:value="handleMenuItemClick"
  />
</template>
