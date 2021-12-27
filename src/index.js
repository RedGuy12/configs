/** @file ESLint Plugin configuration file. */

"use strict";

module.exports = {
	configs: {
		browser: require("./configs/browser.js"),
		cli: require("./configs/cli.js"),
		config: require("./configs/config.js"),
		esm: require("./configs/esm.js"),
		node: require("./configs/node.js"),
		recommended: require("./configs/recommended.js"),
		sample: require("./configs/sample.js"),
		ts: require("./configs/ts.js"),
		vue: require("./configs/vue.js"),
	},
};
