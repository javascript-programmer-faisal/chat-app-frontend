import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ এইটা Vercel ও Netlify-এর জন্য ঠিক
  build: {
    outDir: 'dist',
  },
});
