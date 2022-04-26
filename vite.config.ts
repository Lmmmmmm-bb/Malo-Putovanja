import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'APP_');

  return {
    base: env.APP_BASE_URL,
    plugins: [vue()],
    envPrefix: 'APP_',
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
    }
  };
});
