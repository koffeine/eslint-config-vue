# eslint-config-vue

[![npm](https://img.shields.io/npm/v/eslint-config-koffeine-vue)](https://www.npmjs.com/package/eslint-config-koffeine-vue)
[![devDependencies Status](https://david-dm.org/koffeine/eslint-config-vue/dev-status.svg)](https://david-dm.org/koffeine/eslint-config-vue?type=dev)
[![peerDependencies Status](https://david-dm.org/koffeine/eslint-config-vue/peer-status.svg)](https://david-dm.org/koffeine/eslint-config-vue?type=peer)

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
npm install eslint-plugin-vue@6.2.2 --save-dev --save-exact
```

## Usage

Add the following to your .eslintrc.js file:

```js
module.exports = {
	extends: 'koffeine-vue',
	plugins: [ 'vue' ],
	parser: 'vue-eslint-parser',
	...
};
```

## License

Copyright © Kornél Horváth

Licensed under the [MIT License](https://raw.githubusercontent.com/koffeine/eslint-config-vue/master/LICENSE).