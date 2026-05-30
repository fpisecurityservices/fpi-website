import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const file of fs.readdirSync(src)) {
    const s = path.join(src, file);
    const d = path.join(dest, file);
    if (fs.statSync(s).isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-static-dirs',
      closeBundle() {
        copyDir('assets', 'dist/assets');
        copyDir('uploads', 'dist/uploads');
      },
    },
  ],
  publicDir: false,
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'index-vite.html'),
    },
  },
});
