/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended", // Inclui Prettier e define as regras para funcionar bem com ESLint
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/prop-types": "warn", // Aviso para prop-types
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
    "no-unused-vars": "warn", // Definindo variáveis não utilizadas como warning
    "react/jsx-uses-react": "warn",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
