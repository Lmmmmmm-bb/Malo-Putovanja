import { RouteRecordRaw } from 'vue-router';
import { RouteNameEnum } from '../type';

export const profileRoutes: RouteRecordRaw = {
  path: '/profile',
  name: RouteNameEnum.Profile,
  component: () => import('@/layouts/profile/index.vue')
};
