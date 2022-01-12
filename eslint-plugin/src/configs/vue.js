/** @file Vue SFC-Specific Rules. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: ["plugin:@redguy12/browser", "plugin:@redguy12/typescript","plugin:vue/vue3-recommended"],

	overrides: [
		{
			files: "src/views/**.vue",
			rules: { "vue/multi-word-component-names": 0 },
		},
	],

	parser: "vue-eslint-parser",

	parserOptions: {
		ecmaFeatures: { jsx: true },
		extraFileExtensions: [".vue"],
		parser: "@typescript-eslint/parser",
		sourceType: "module",
		vueFeatures: { filter: true, interpolationAsNonHTML: false },
	},

	rules: {
		"@redguy12/html-file-comment": 2,
		"eol-last": 0,
		"import/extensions": [2, "never", { vue: "always" }],
		"import/no-unassigned-import": 0,
		"import/no-unused-modules": 0,
		"jsdoc/require-file-overview": 0,
		"linebreak-style": 0,
		"max-len": 0,
		"max-lines": 0,
		"no-trailing-spaces": 0,
		"unicode-bom": 0,
		"vue/array-bracket-newline": 2,
		"vue/array-bracket-spacing": 2,
		"vue/arrow-spacing": 2,

		"vue/block-lang": [2, { script: { lang: "ts" } }],

		"vue/block-spacing": 2,
		"vue/block-tag-newline": 2,
		"vue/brace-style": 2,
		"vue/comma-dangle": [2, "always-multiline"],
		"vue/comma-spacing": 2,
		"vue/comma-style": 2,
		"vue/component-api-style": 2,
		"vue/component-name-in-template-casing": 2,
		"vue/component-options-name-casing": 2,
		"vue/custom-event-name-casing": 2,
		"vue/dot-location": [2, "property"],
		"vue/dot-notation": 2,
		"vue/eqeqeq": 2,
		"vue/func-call-spacing": 2,
		"vue/html-button-has-type": 2,
		"vue/html-closing-bracket-newline": 0,
		"vue/html-comment-content-newline": 2,
		"vue/html-comment-content-spacing": 2,
		"vue/html-comment-indent": 2,
		"vue/html-indent": 0,

		"vue/html-self-closing": [
			"error",
			{
				html: {
					component: "always",
					normal: "always",
					void: "always",
				},

				svg: "always",
				math: "always",
			},
		],

		"vue/key-spacing": 2,
		"vue/keyword-spacing": 2,
		"vue/match-component-file-name": 2,
		"vue/max-attributes-per-line": 0,

		"vue/max-len": [
			1,
			{
				code: 100,
				comments: 120,
				ignoreRegExpLiterals: true,
				ignoreStrings: false,
				ignoreTemplateLiterals: false,
				ignoreUrls: true,
				tabWidth: 0,
			},
		],

		"vue/new-line-between-multi-line-property": 0,
		"vue/next-tick-style": 2,
		"vue/no-boolean-default": 2,
		"vue/no-child-content": 2,
		"vue/no-constant-condition": 2,
		"vue/no-duplicate-attr-inheritance": 2,
		"vue/no-empty-component-block": 2,
		"vue/no-empty-pattern": 2,
		"vue/no-expose-after-await": 2,
		"vue/no-invalid-model-keys": 2,
		"vue/no-irregular-whitespace": 2,
		"vue/no-loss-of-precision": 2,
		"vue/no-multiple-objects-in-class": 2,
		"vue/no-potential-component-option-typo": 2,
		"vue/no-reserved-component-names": 2,
		"vue/no-restricted-block": 2,
		"vue/no-restricted-call-after-await": 2,
		"vue/no-restricted-class": 2,
		"vue/no-restricted-component-options": 2,
		"vue/no-restricted-custom-event": 2,
		"vue/no-restricted-props": 2,
		"vue/no-restricted-static-attribute": 2,
		"vue/no-restricted-syntax": 2,
		"vue/no-restricted-v-bind": 2,
		"vue/no-sparse-arrays": 2,
		"vue/no-template-target-blank": 2,
		"vue/no-this-in-before-route-enter": 2,
		"vue/no-undef-properties": 2,
		"vue/no-unsupported-features": 2,
		"vue/no-unused-properties": 2,
		"vue/no-unused-refs": 2,
		"vue/no-use-computed-property-like-method": 2,
		"vue/no-useless-concat": 2,
		"vue/no-useless-mustaches": 2,
		"vue/no-useless-v-bind": 2,
		"vue/no-v-text": 2,

		"vue/object-curly-newline": [
			2,
			{
				ExportDeclaration: "never",
				ImportDeclaration: "never",
				ObjectExpression: { minProperties: 3, multiline: true },
				ObjectPattern: "never",
			},
		],

		"vue/object-curly-spacing": [2, "always"],
		"vue/object-property-newline": 2,
		"vue/operator-linebreak": 2,
		"vue/padding-line-between-blocks": 2,
		"vue/prefer-separate-static-class": 2,
		"vue/prefer-template": 2,
		"vue/require-emit-validator": 2,
		"vue/require-expose": 2,
		"vue/require-name-property": 2,
		"vue/script-indent": 0,
		"vue/singleline-html-element-content-newline": 0,
		"vue/sort-keys": 2,
		"vue/space-in-parens": 2,
		"vue/space-infix-ops": 2,
		"vue/space-unary-ops": 2,
		"vue/static-class-names-order": 2,
		"vue/template-curly-spacing": 2,
		"vue/v-for-delimiter-style": 2,
		"vue/v-on-function-call": 2,
	},
};

module.exports = config;
