import { RouteRecordRaw } from 'vue-router';
import { RouteNameEnum } from '@/common/models';
import { dailyRoutes } from './daily';
import { groupRoutes } from './group';
import { profileRoutes } from './profile';
import { scheduleRoutes } from './schedule';
import { studyRoutes } from './study';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteNameEnum.Home,
    component: () => import('@/layouts/home/index.vue')
  },
  dailyRoutes,
  groupRoutes,
  profileRoutes,
  scheduleRoutes,
  studyRoutes
];
