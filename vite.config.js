import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Vercel static asset path fix
  build: {
    outDir: 'dist',
  },
});
