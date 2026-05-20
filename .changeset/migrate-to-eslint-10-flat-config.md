---
"@tammergard/eslint-config-typescript": major
---

Migrate to ESLint 10 flat config natively.

- Drop `@eslint/eslintrc` and `FlatCompat`; consume `typescript-eslint` flat
  configs directly via `tseslint.config()`.
- Replace `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`
  with the `typescript-eslint` meta-package.
- Bump `@tammergard/eslint-config-base` to `^6.0.0`.
- Require Node.js `>=24` and ESLint `>=10`; add `typescript` peer dependency
  (`>=4.8.4 <6.1.0`).
- Ship as ESM (`"type": "module"`) with an `exports` map.
- Use `parserOptions.projectService` instead of `parserOptions.project`.
- Ship TypeScript types (`index.d.ts`).
