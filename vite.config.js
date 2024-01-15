import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const resolvePath = (srcPath) => path.resolve(__dirname, srcPath);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolvePath('./src'),
      '@hooks': resolvePath('./src/hooks'),
      '@pages': resolvePath('./src/pages'),
      '@router': resolvePath('./src/router'),
      '@shared': resolvePath('./src/shared'),
      '@utils': resolvePath('./src/shared/utils'),
    },
  },
});
