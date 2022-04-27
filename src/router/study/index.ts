import { RouteRecordRaw } from 'vue-router';
import { RouteNameEnum } from '@/common/models';

export const studyRoutes: RouteRecordRaw = {
  path: '/study',
  name: RouteNameEnum.Study,
  component: () => import('@/layouts/study/index.vue')
};
