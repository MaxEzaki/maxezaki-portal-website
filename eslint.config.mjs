import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import tailwindcss from "eslint-plugin-tailwindcss";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...tailwindcss.configs["flat/recommended"],
  {
    ignores: ["*.config.js", "dist/**"],
  },
];

export default eslintConfig;
