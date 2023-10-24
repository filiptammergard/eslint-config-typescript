const { FlatCompat } = require("@eslint/eslintrc")
const typescriptParser = require("@typescript-eslint/parser")
const tammergardBaseConfig = require("@tammergard/eslint-config-base")

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

module.exports = [
	...compat.extends(
		"plugin:@typescript-eslint/eslint-plugin/recommended-type-checked",
	),
	...compat.extends(
		"plugin:@typescript-eslint/eslint-plugin/stylistic-type-checked",
	),
	...tammergardBaseConfig,
	{
		rules: {
			"@typescript-eslint/array-type": ["error", { default: "generic" }],
			"@typescript-eslint/explicit-module-boundary-types": "off",
		},
	},
	{
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: true,
			},
		},
	},
]
