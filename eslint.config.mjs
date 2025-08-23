import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    rules: {
      "no-console": "warn",
      "no-var-requires": "error",
      "no-unused-expressions": "error",
      "no-duplicate-imports": "error",
      "no-redeclare": "error",
      "no-multi-spaces": "error",
      "no-empty-function": "warn",
      "no-unused-vars": "warn",
    },
  }
);
