import { RouteRecordRaw } from 'vue-router';
import { RouteNameEnum } from '../type';

export const scheduleRoutes: RouteRecordRaw = {
  path: '/schedule',
  name: RouteNameEnum.Schedule,
  component: () => import('@/layouts/schedule/index.vue')
};
