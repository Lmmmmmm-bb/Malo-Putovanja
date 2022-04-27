import { RouteNameEnum } from '@/router';
import { MenuOption } from 'naive-ui';

export const menuOptions: MenuOption[] = [
  { key: RouteNameEnum.Daily, label: '日常' },
  { key: RouteNameEnum.Schedule, label: '课程表' },
  { key: RouteNameEnum.Study, label: '自习号' },
  { key: RouteNameEnum.Group, label: '打卡组' },
  { key: RouteNameEnum.Profile, label: '我的' }
];
