module.exports = {
	// TODO: Remove with ESLint 8
	parser: "@babel/eslint-parser",
	parserOptions: {
		requireConfigFile: false,
		sourceType: "module",
		babelOptions: {
			plugins: [
				require("fs").existsSync("node_modules/@babel/plugin-syntax-top-level-await")
					? "@babel/plugin-syntax-top-level-await"
					: "@onedotprojects/eslint-plugin/node_modules/@babel/plugin-syntax-top-level-await",
			],
		},
	},
	rules: {
		"id-match": [
			2,
			/^(?:_?[A-Za-z]+(?:[A-Z][a-z]{1,10}){0,2}|(?:_?[A-Z]+){1,2}|_)$/.source,
			{ ignoreDestructuring: false, onlyDeclarations: false, properties: true },
		],
		"import/extensions": [2, "always"],
		"import/exports-last": 0,
		"import/no-commonjs": 2,
		"import/no-unresolved": 2,
		"import/order": [
			2,
			{
				"groups": [
					"type",
					"builtin",
					["object", "external"],
					["internal", "parent", "sibling", "index"],
				],
				"newlines-between": "always",
				"alphabetize": {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
		"node/file-extension-in-import": 0,
		"node/no-unsupported-features/es-syntax": [
			"error",
			{ ignores: ["dynamicImport", "modules"] },
		],
		"node/no-missing-import": 0,
		"sort-imports": 0,
	},
};
