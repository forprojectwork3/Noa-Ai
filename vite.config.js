import { defineConfig } from 'vite';

export default defineConfig({
  // Public dir — Vite copies everything here as-is (including /verify and /reset)
  publicDir: 'public',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Chunk size warning threshold
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Vendor code splitting
        manualChunks(id) {
          if (id.includes('node_modules/three'))  return 'three';
          if (id.includes('node_modules/gsap'))   return 'gsap';
          if (id.includes('node_modules/lenis'))  return 'lenis';
          if (id.includes('node_modules/swiper')) return 'swiper';
        },
      },
    },
  },

  server: {
    port: 5173,
    open: true,
  },
});
