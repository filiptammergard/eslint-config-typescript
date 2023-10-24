# @tammergard/eslint-config-typescript

A sharable ESLint config for TypeScript with personal preferences.

## Installation

Install this ESLint config as a dev dependency:

```bash
# npm
npm install @tammergard/eslint-config-typescript --save-dev

# yarn
yarn add @tammergard/eslint-config-typescript --dev

# pnpm
pnpm add @tammergard/eslint-config-typescript --save-dev
```

Then also install all peer dependencies.

## Usage

Add the config to your `eslint.config.js` file:

```js
const tammergardTypeScriptConfig = require("@tammergard/eslint-config-typescript")

module.exports = [...tammergardTypeScriptConfig]
```

## License

MIT
