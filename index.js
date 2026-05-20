import tammergardBaseConfig from "@tammergard/eslint-config-base"
import tseslint from "typescript-eslint"

export default tseslint.config(
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	...tammergardBaseConfig,
	{
		name: "tammergard/typescript/rules",
		rules: {
			"@typescript-eslint/array-type": ["error", { default: "generic" }],
			"@typescript-eslint/explicit-module-boundary-types": "off",
		},
	},
	{
		name: "tammergard/typescript/language-options",
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
	},
)
