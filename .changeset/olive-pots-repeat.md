---
"@tammergard/eslint-config-typescript": patch
---

Apply the base config before the typescript-eslint configs. Spreading it last
re-enabled core rules such as `no-unused-vars` and `no-redeclare`, which
typescript-eslint turns off for TypeScript files because they report false
positives there — on type-only parameter names in interfaces, and on the
declaration merging of a type and a const with the same name.
