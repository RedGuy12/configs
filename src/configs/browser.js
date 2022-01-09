/** @file Browser-specific Rules. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	env: {
		browser: true,
		es2020: false,
		es6: false,
		node: false,
	},

	parserOptions: { ecmaVersion: 3 },

	rules: {
		"comma-dangle": 0,
		"jsdoc/require-file-overview": 0,
		"no-console": 2,

		"no-restricted-globals": [
			2,
			"addEventListener",
			"blur",
			"close",
			"closed",
			"confirm",
			"defaultStatus",
			"defaultstatus",
			"event",
			"external",
			"find",
			"focus",
			"frameElement",
			"frames",
			"history",
			"innerHeight",
			"innerWidth",
			"length",
			"location",
			"locationbar",
			"menubar",
			"moveBy",
			"moveTo",
			"name",
			"onblur",
			"onerror",
			"onfocus",
			"onload",
			"onresize",
			"onunload",
			"open",
			"opener",
			"opera",
			"outerHeight",
			"outerWidth",
			"pageXOffset",
			"pageYOffset",
			"parent",
			"print",
			"removeEventListener",
			"resizeBy",
			"resizeTo",
			"screen",
			"screenLeft",
			"screenTop",
			"screenX",
			"screenY",
			"scroll",
			"scrollbars",
			"scrollBy",
			"scrollTo",
			"scrollX",
			"scrollY",
			"self",
			"status",
			"statusbar",
			"stop",
			"toolbar",
			"top",
		],

		"prettier/prettier": 0,
	},
};

module.exports = config;
