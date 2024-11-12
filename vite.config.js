import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'emailjs-com': '/node_modules/emailjs-com', // if you need to explicitly define the path
    },
  },
});
