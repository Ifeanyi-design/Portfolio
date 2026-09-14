import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Minimal config: base './' keeps built asset paths relative so the
// site works on Vercel and when previewing the dist folder locally.
export default defineConfig({
  plugins: [react()],
  base: './',
});
