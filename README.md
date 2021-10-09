# eslint-config-vue

[![npm (scoped)](https://img.shields.io/npm/v/@koffeine/eslint-config-vue)](https://www.npmjs.com/package/@koffeine/eslint-config-vue)
[![devDependencies Status](https://david-dm.org/koffeine/eslint-config-vue/dev-status.svg)](https://david-dm.org/koffeine/eslint-config-vue?type=dev)
[![peerDependencies Status](https://david-dm.org/koffeine/eslint-config-vue/peer-status.svg)](https://david-dm.org/koffeine/eslint-config-vue?type=peer)

Koffeine's ESLint shareable config for Vue.js 3

## Installation

Use option `--save-exact` for npm install to make sure that eslint-plugin-vue and config rules match.

__Install config__

```sh
npm install @koffeine/eslint-config-vue --save-dev --save-exact
```

__Install eslint-plugin-vue__

Install the correct version of eslint-plugin-vue, which is listed by the command:

```sh
npm info @koffeine/eslint-config-vue peerDependencies
```

For example:

```sh
npm install eslint-plugin-vue@7.19.1 --save-dev --save-exact
```

## Usage

Add the following to your .eslintrc.js file:

```js
module.exports = {
	extends: '@koffeine/eslint-config-vue',
	plugins: [ 'vue' ],
	parser: 'vue-eslint-parser',
	...
};
```

## License

Copyright © Kornél Horváth

Licensed under the [MIT License](https://raw.githubusercontent.com/koffeine/eslint-config-vue/master/LICENSE).
