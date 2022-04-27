import { RouteRecordRaw } from 'vue-router';
import { RouteNameEnum } from '@/common/models';

export const dailyRoutes: RouteRecordRaw = {
  path: '/daily',
  name: RouteNameEnum.Daily,
  component: () => import('@/layouts/daily/index.vue')
};
