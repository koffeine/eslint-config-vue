'use strict';

const { Linter, ESLint } = require('eslint');
const { normalizePackageName, getShorthandName } = require('@eslint/eslintrc').Legacy.naming;

const configFile = process.argv[2];

const allValidRules = [];
const allDeprecatedRules = [];

const processRules = (rules, prefix = '') => {
	for (const [ name, rule ] of rules) {
		(rule.meta?.deprecated ? allDeprecatedRules : allValidRules).push(prefix + name);
	}
};

const test = async() => {
	processRules(new Linter().getRules().entries());

	const { plugins, rules } = await new ESLint({ useEslintrc: false, overrideConfigFile: configFile })
		.calculateConfigForFile(configFile);

	plugins.forEach((plugin) => {
		const prefix = `${getShorthandName(plugin, 'eslint-plugin')}/`;

		processRules(Object.entries(require(normalizePackageName(plugin, 'eslint-plugin')).rules), prefix);
	});

	const currentRules = Object.keys(rules);

	const missingRules = allValidRules.filter((rule) => !currentRules.includes(rule));
	const deprecatedRules = allDeprecatedRules.filter((rule) => currentRules.includes(rule));
	const invalidRules = currentRules.filter((rule) => !(allValidRules.includes(rule) || allDeprecatedRules.includes(rule)));

	if (missingRules.length > 0) {
		console.log('Missing rules:', missingRules); // eslint-disable-line no-console
	}

	if (deprecatedRules.length > 0) {
		console.log('Deprecated rules:', deprecatedRules); // eslint-disable-line no-console
	}

	if (invalidRules.length > 0) {
		console.log('Invalid rules:', invalidRules); // eslint-disable-line no-console
	}

	const numberOfErrors = missingRules.length + deprecatedRules.length + invalidRules.length;

	if (numberOfErrors > 0) {
		console.log(); // eslint-disable-line no-console
	}

	process.exit(numberOfErrors);
};

test();
