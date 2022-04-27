import { RouteRecordRaw } from 'vue-router';
import { RouteNameEnum } from '@/common/models';

export const profileRoutes: RouteRecordRaw = {
  path: '/profile',
  name: RouteNameEnum.Profile,
  component: () => import('@/layouts/profile/index.vue')
};
