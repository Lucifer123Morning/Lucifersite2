import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["three"], // Убедитесь, что three оптимизируется Vite
  },
  build: {
    rollupOptions: {
      external: ["three"], // Исключаем three из финальной сборки, чтобы она обрабатывалась корректно
    },
    commonjsOptions: {
      include: [/node_modules/, /three/], // Обрабатываем зависимости three из node_modules
    },
  },
});
