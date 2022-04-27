import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router';
import { routes } from './routes';

const history = import.meta.env.DEV
  ? createWebHistory()
  : createWebHashHistory('/Malo-Putovanja/');

const router = createRouter({
  history,
  routes
});

export * from './type';
export default router;
