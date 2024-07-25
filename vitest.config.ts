import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup.ts"],
    coverage: {
      provider: "v8", // or 'istanbul'
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{js,jsx,ts,tsx}"], // Include only files in the src directory
    },
  },
});
