import { RouteRecordRaw } from 'vue-router';
import { RouteNameEnum } from '@/common/models';

export const groupRoutes: RouteRecordRaw = {
  path: '/group',
  name: RouteNameEnum.Group,
  component: () => import('@/layouts/group/index.vue')
};
