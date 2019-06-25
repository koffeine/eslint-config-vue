# eslint-config-koffeine-vue

[![npm version](https://img.shields.io/npm/v/eslint-config-koffeine-vue.svg)](https://www.npmjs.com/package/eslint-config-koffeine-vue)
[![devDependency Status](https://david-dm.org/koffeine/eslint-config-koffeine-vue/dev-status.svg)](https://david-dm.org/koffeine/eslint-config-koffeine-vue?type=dev)
[![peerDependency Status](https://david-dm.org/koffeine/eslint-config-koffeine-vue/peer-status.svg)](https://david-dm.org/koffeine/eslint-config-koffeine-vue?type=peer)

Koffeine's ESLint shareable config for Vue.js

## Installation

Use option `--save-exact` for npm install to make sure that eslint-plugin-vue and config rules match.

__Install config__

```sh
npm install eslint-config-koffeine-vue --save-dev --save-exact
```

__Install eslint-plugin-vue__

Install the correct version of eslint-plugin-vue, which is listed by the command:

```sh
npm info eslint-config-koffeine-vue peerDependencies
```

For example:

```sh
npm install eslint-plugin-vue@5.2.3 --save-dev --save-exact
```

## Usage

If you already use other parser (e.g. `'parser': 'babel-eslint'`), please move it into `parserOptions`, so it doesn't collide with the parser used by this config:

```diff
- 'parser': 'babel-eslint',
  'parserOptions': {
+     'parser': 'babel-eslint'
  }
```

__With [eslint-config-koffeine](https://www.npmjs.com/package/eslint-config-koffeine)__

Add the following to your .eslintrc.js file:

```js
modules.exports = {
	extends: [
		'koffeine',
		'koffeine-vue'
	],
	plugins: [ 'vue' ],
	parser: 'vue-eslint-parser',
	...
};
```

__Standalone__

Add the following to your .eslintrc.js file:

```js
modules.exports = {
	extends: 'koffeine-vue',
	plugins: [ 'vue' ],
	parser: 'vue-eslint-parser',
	...
};
```

## License

Copyright © 2018 Kornél Horváth

Licensed under the [MIT License](https://raw.githubusercontent.com/koffeine/eslint-config-koffeine-vue/master/LICENSE).