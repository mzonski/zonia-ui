import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'v8'
    },
    exclude:[
      ...configDefaults.exclude,
      '**/index.ts'
    ],
    setupFiles: ['./utils/setupTests.ts'],
    environment: 'jsdom',
  },
  plugins: [react()],
});
