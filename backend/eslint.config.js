import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 🔹 Base JS settings for both frontend/backend
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: { js },
    rules: js.configs.recommended.rules,
  },

  // 🔹 Frontend (React/browser)
  {
    files: ["src/**/*.{js,jsx}"], // Apply only to frontend files
    languageOptions: {
      globals: globals.browser,
    },
    plugins: { react: pluginReact },
    rules: {
      ...pluginReact.configs.recommended.rules,
    },
  },

  // 🔹 Backend (Node.js)
  {
    files: ["backend/**/*.{js,mjs,cjs}"], // Adjust folder name if needed
    languageOptions: {
      globals: {
        console:true,
        process: true,
      },
    },
  },
]);
