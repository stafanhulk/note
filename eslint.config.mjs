import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import noConsoleLog from "./eslint-rules/no-console-log.js";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      custom: {
        rules: {
          "no-console-log": noConsoleLog, // 规则名
        },
      },
    },
    rules: {
      "custom/no-console-log": "error",
    },
  },
]);

export default eslintConfig;
