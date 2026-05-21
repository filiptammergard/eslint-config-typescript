# @tammergard/eslint-config-typescript

A sharable ESLint config for TypeScript with personal preferences. Ships as a
flat config for ESLint 10. Requires TypeScript 4.8.4 or later.

## Installation

```bash
# npm
npm install --save-dev @tammergard/eslint-config-typescript eslint typescript

# pnpm
pnpm add -D @tammergard/eslint-config-typescript eslint typescript

# bun
bun add -d @tammergard/eslint-config-typescript eslint typescript
```

## Usage

Add the config to your `eslint.config.js`:

```js
import tammergardTypeScriptConfig from "@tammergard/eslint-config-typescript"

export default [...tammergardTypeScriptConfig]
```

## License

MIT
