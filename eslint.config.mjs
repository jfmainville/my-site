import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  { rules: { "no-console": "warn" } },
  globalIgnores([".next/**", "coverage/**", "next-env.d.ts"]),
]);
