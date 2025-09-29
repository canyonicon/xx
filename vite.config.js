import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// run package config
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  build: {
    outDir: './build',
    emptyOutDir: false,
  },
  plugins: [react()],
  define: {
    'process.env': process.env
  }
})
