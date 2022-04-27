import { RouteRecordRaw } from 'vue-router';
import { RouteNameEnum } from '../type';

export const groupRoutes: RouteRecordRaw = {
  path: '/group',
  name: RouteNameEnum.Group,
  component: () => import('@/layouts/group/index.vue')
};
