// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Risa-react-apps/',  // ← この行が必要！
  plugins: [react()],
});