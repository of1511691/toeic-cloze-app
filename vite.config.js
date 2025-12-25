import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/toeic-cloze-app/",
  plugins: [react()],
});
