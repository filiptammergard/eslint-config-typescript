# @tammergard/eslint-config-typescript

A sharable ESLint config for TypeScript with personal preferences. Ships as a
flat config for ESLint 10.

## Requirements

- Node.js >= 24
- ESLint >= 10
- TypeScript >= 4.8.4 < 6.1.0

## Installation

Install this ESLint config and its peer dependencies as dev dependencies:

```bash
# npm
npm install --save-dev @tammergard/eslint-config-typescript eslint typescript

# pnpm
pnpm add -D @tammergard/eslint-config-typescript eslint typescript
```

## Usage

Add the config to your `eslint.config.js` file:

```js
import tammergardTypeScriptConfig from "@tammergard/eslint-config-typescript"

export default [...tammergardTypeScriptConfig]
```

## License

MIT
