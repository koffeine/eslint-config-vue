# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]

### Changed

- Updated devDependencies


## [11.0.0] - 2021-10-06

### Changed

- Updated eslint-plugin-vue to 7.19.1


## [10.0.0] - 2021-09-08

### Changed

- Updated eslint-plugin-vue to 7.17.0


## [9.0.0] - 2021-08-07

### Changed

- Updated eslint-plugin-vue to 7.15.1
- Updated devDependencies
- Updated README.md with note about this plugin is for version 3 only


## [8.0.0] - 2021-04-20

### Changed

- Updated eslint-plugin-vue to 7.9.0, many rules have changed
- Explicitly turned off unused rules
- Updated devDependencies
- Updated project files


## [7.0.1] - 2020-07-28

### Changed

- Renamed GitHub repository
- Renamed package to @koffeine/eslint-config-vue
- Updated eslint to 7.5.0
- Updated @koffeine/eslint-config to 15.0.1
- Added test for deprecated/unused rules using eslint-find-rules


## [7.0.0] - 2020-07-24

### Added

- Enabled vue/no-reserved-component-names rule
- Enabled vue/component-tags-order rule
- Enabled vue/component-definition-name-casing rule
- Enabled vue/valid-v-bind-sync rule
- Enabled vue/no-deprecated-slot-attribute rule
- Enabled vue/no-deprecated-slot-scope-attribute rule
- Enabled vue/no-unsupported-features rule
- Enabled vue/no-static-inline-styles rule
- Enabled vue/no-irregular-whitespace rule
- Enabled vue/padding-line-between-blocks rule

### Changed

- Updated eslint to 6.8.0
- Updated eslint-config-koffeine to 14.0.3
- Updated eslint-plugin-vue to 6.2.2
- Set default values to options where they were missing:
	- vue/html-indent
	- vue/multiline-html-element-content-newline
	- vue/no-multi-spaces
- Updated options with default values:
	- vue/no-parsing-error
	- vue/order-in-components
- Updated options of wrapped ESLint rules to match those in eslint-config-koffeine:
	- vue/camelcase
- Changed casing to PascalCase:
	- vue/component-name-in-template-casing
	- vue/name-property-casing
- Changed vue/html-self-closing rule to always expect self-closing components
- Changed vue/html-closing-bracket-spacing rule to disallow spaces in self-closing tag
- Changed vue/match-component-file-name rule to check .vue files and be case-sensitive
- Updated rules with new options using default values:
	- vue/attributes-order
	- vue/html-quotes
- README.md cleanup

### Removed

- Removed deprecated vue/no-confusing-v-for-v-if rule


## [6.0.1] - 2019-11-14

### Changed

- Updated eslint-plugin-vue to 6.0.1


## [6.0.0] - 2019-11-07

### Changed

- Fixed an entry in CHANGELOG.md
- Updated .eslintrc.js
- Removed .npmignore in favor of files in package.json
- Updated eslint to 6.6.0
- Updated eslint-config-koffeine to 13.0.0
- Fixed typos in README.md
- Removed years from license
- package.json cleanup
- Updated eslint-plugin-vue to 6.0.0
- Enabled vue/no-empty-pattern rule
- Enabled vue/dot-location rule
- Enabled vue/keyword-spacing rule
- Enabled vue/no-deprecated-scope-attribute rule
- Enabled vue/valid-v-slot rule
- Enabled vue/v-slot-style rule


## [5.0.0] - 2019-06-25

### Changed

- Updated eslint to 6.0.1
- Updated eslint-config-koffeine to 8.0.0
- Updated eslint-plugin-vue to 5.2.3


## [4.0.3] - 2019-03-01

### Changed

- Disabled v-on-function-call rule


## [4.0.2] - 2019-02-19

### Changed

- Updated eslint to 5.14.1
- Updated eslint-config-koffeine to 7.0.4
- Updated eslint-plugin-vue to 5.2.2


## [4.0.1] - 2019-02-14

### Changed

- Updated eslint-plugin-vue to 5.2.1
- Reenabled 'vue/no-async-in-computed-properties' rule


## [4.0.0] - 2019-02-14

### Changed

- Updated eslint to 5.13.0
- Updated eslint-config-koffeine to 7.0.2
- Updated eslint-plugin-vue to 5.2.0


## [3.0.2] - 2019-01-07

### Changed

- Updated eslint to 5.12.0
- Updated eslint-config-koffeine to 7.0.0
- Updated eslint-plugin-vue to 5.1.0


## [3.0.1] - 2018-12-04

### Changed

- Updated eslint-plugin-vue to 5.0.0


## [3.0.0] - 2018-12-03

### Changed

- ignoreWhenBindingPresent set to true in no-unused-components rule
- Enabled use-v-on-exact rule


## [2.0.2] - 2018-11-26

### Changed

- Updated eslint-plugin-vue to 5.0.0-beta.5


## [2.0.1] - 2018-11-16

### Changed

- Updated eslint-plugin-vue to 5.0.0-beta.4


## [2.0.0] - 2018-11-12

### Changed

- Config no longer has plugins and parser properties


## [1.0.1] - 2018-11-11

### Changed

- Updated eslint to 5.9.0
- Updated eslint-config-koffeine to 5.0.10
- Renamed config.js to index.js

### Removed

- Unnecessary files from published package


## [1.0.0] - 2018-11-06

### Added

- Initial public release