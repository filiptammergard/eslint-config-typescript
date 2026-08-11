import tammergardBaseConfig from "@tammergard/eslint-config-base"
import tseslint from "typescript-eslint"

export default tseslint.config(
	// Basen måste komma först. tseslint-configarna stänger av kärnregler som
	// no-unused-vars och no-redeclare för TS-filer, där de ger falska positiv –
	// och den avstängningen skrivs över om js.configs.recommended kommer efter.
	...tammergardBaseConfig,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
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
