import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/layouts/home/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/layouts/about/index.vue')
  }
];
