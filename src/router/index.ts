import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const history = createWebHistory();

export const router = createRouter({
  history,
  routes
});
