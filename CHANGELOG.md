# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]


## [12.0.0] - 2021-10-16

### Changed

- Enabled vue/array-bracket-newline rule with `'consistent'`
- Updated vue/brace-style rule with `'1tbs', { allowSingleLine: false }`
- Updated vue/comma-dangle rule with `'only-multiline'`
- Updated vue/no-extra-parens rule with `'all', { conditionalAssign: false, returnAssign: true, nestedBinaryExpressions: false, ignoreJSX: 'none', enforceForArrowConditionals: true, enforceForSequenceExpressions: true, enforceForNewInMemberExpressions: false, enforceForFunctionPrototypeMethods: false }`
- Updated vue/no-irregular-whitespace rule with `{ skipStrings: false, skipComments: false, skipRegExps: false, skipTemplates: false }`
- Enabled object-curly-newline rule with `{ consistent: true }`


## [11.0.0] - 2021-10-06

### Changed

- Updated eslint-plugin-vue to 7.19.1
- Enabled vue/component-api-style rule with `[ 'script-setup' ]`
- Enabled vue/no-useless-template-attributes rule


## [10.0.0] - 2021-09-08

### Changed

- Updated eslint-plugin-vue to 7.17.0
- Enabled vue/no-v-text rule
- Enabled vue/valid-v-memo rule


## [9.0.0] - 2021-08-07

### Changed

- Updated eslint-plugin-vue to 7.15.1
- Disabled vue/experimental-script-setup-vars rule
- Enabled vue/no-deprecated-v-is rule
- Enabled vue/no-export-in-script-setup rule
- Enabled vue/no-this-in-before-route-enter rule
- Enabled vue/no-use-computed-property-like-method rule
- Enabled vue/script-setup-uses-vars rule
- Enabled vue/valid-define-emits rule
- Enabled vue/valid-define-props rule


## [8.0.0] - 2021-04-20

### Added

- Added Vue 3.0 support

### Changed

- Updated eslint-plugin-vue to 7.9.0
- Updated vue/attributes-order rule with `{ order: [ 'DEFINITION', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', [ 'UNIQUE', 'SLOT' ], 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT' ], alphabetical: false }`
- Enabled vue/block-tag-newline rule with `{ singleline: 'consistent', multiline: 'consistent', maxEmptyLines: 0, blocks: { template: { singleline: 'consistent', multiline: 'consistent', maxEmptyLines: 0 }, script: { singleline: 'consistent', multiline: 'consistent', maxEmptyLines: 0 }, 'my-block': { singleline: 'consistent', multiline: 'consistent', maxEmptyLines: 0 } } }`
- Updated vue/camelcase rule with `{ properties: 'always', ignoreDestructuring: false, ignoreImports: false, ignoreGlobals: false }`
- Enabled vue/comma-spacing rule with `{ before: false, after: true }`
- Enabled vue/comma-style rule with `'last'`
- Updated vue/comment-directive rule with `{ reportUnusedDisableDirectives: true }`
- Enabled vue/custom-event-name-casing rule with `'kebab-case'`
- Enabled vue/dot-notation rule with `{ allowKeywords: true }`
- Enabled vue/experimental-script-setup-vars rule
- Enabled vue/func-call-spacing rule with `'never'`
- Enabled vue/html-button-has-type rule with `{ button: true, submit: true, reset: true }`
- Updated vue/html-closing-bracket-spacing rule with `{ startTag: 'never', endTag: 'never', selfClosingTag: 'always' }`
- Updated vue/html-self-closing rule with `{ html: { void: 'never', normal: 'never', component: 'always' }, svg: 'always', math: 'always' }`
- Disabled vue/name-property-casing rule
- Enabled vue/no-arrow-functions-in-watch rule
- Enabled vue/no-constant-condition rule with `{ checkLoops: false }`
- Enabled vue/no-deprecated-data-object-declaration rule
- Enabled vue/no-deprecated-destroyed-lifecycle rule
- Enabled vue/no-deprecated-dollar-listeners-api rule
- Enabled vue/no-deprecated-dollar-scopedslots-api rule
- Enabled vue/no-deprecated-events-api rule
- Enabled vue/no-deprecated-filter rule
- Enabled vue/no-deprecated-functional-template rule
- Enabled vue/no-deprecated-html-element-is rule
- Enabled vue/no-deprecated-inline-template rule
- Enabled vue/no-deprecated-props-default-this rule
- Enabled vue/no-deprecated-v-bind-sync rule
- Enabled vue/no-deprecated-v-on-native-modifier rule
- Enabled vue/no-deprecated-v-on-number-modifiers rule
- Enabled vue/no-deprecated-vue-config-keycodes rule
- Enabled vue/no-dupe-v-else-if rule
- Enabled vue/no-duplicate-attr-inheritance rule
- Enabled vue/no-empty-component-block rule
- Enabled vue/no-extra-parens rule with `'all', { conditionalAssign: true, returnAssign: true, nestedBinaryExpressions: false, ignoreJSX: 'none', enforceForArrowConditionals: true, enforceForSequenceExpressions: true, enforceForNewInMemberExpressions: false, enforceForFunctionPrototypeMethods: false }`
- Enabled vue/no-invalid-model-keys rule
- Updated vue/no-irregular-whitespace rule with `{ skipStrings: true, skipComments: true, skipRegExps: true, skipTemplates: true }`
- Enabled vue/no-lifecycle-after-await rule
- Enabled vue/no-lone-template with `{ ignoreAccessible: false }`
- Enabled vue/no-multiple-objects-in-class rule
- Enabled vue/no-multiple-slot-args rule
- Enabled vue/no-potential-component-option-typo rule with `{ presets: [ 'vue' ], threshold: 1 }`
- Enabled vue/no-ref-as-operand rule
- Updated vue/no-reserved-component-names rule with `{ disallowVueBuiltInComponents: true, disallowVue3BuiltInComponents: true }`
- Enabled vue/no-restricted-v-bind rule with `'/^v-/'`
- Enabled vue/no-setup-props-destructure rule
- Enabled vue/no-sparse-arrays rule
- Updated vue/no-unsupported-features rule with `{ version: '^3.0.0' }`
- Enabled vue/no-useless-concat rule
- Enabled vue/no-useless-mustaches rule with `{ ignoreIncludesComment: false, ignoreStringEscape: false }`
- Enabled vue/no-useless-v-bind rule
- Enabled vue/no-v-for-template-key-on-child rule
- Enabled vue/no-watch-after-await rule
- Enabled vue/one-component-per-file rule
- Enabled vue/operator-linebreak rule with `'before'`
- Updated vue/order-in-components rule with `{ order: [ 'el', 'name', 'key', 'parent', 'functional', [ 'delimiters', 'comments' ], [ 'components', 'directives', 'filters' ], 'extends', 'mixins', [ 'provide', 'inject' ], 'ROUTER_GUARDS', 'layout', 'middleware', 'validate', 'scrollToTop', 'transition', 'loading', 'inheritAttrs', 'model', [ 'props', 'propsData' ], 'emits', 'setup', 'asyncData', 'data', 'fetch', 'head', 'computed', 'watch', 'watchQuery', 'LIFECYCLE_HOOKS', 'methods', [ 'template', 'render' ], 'renderError' ] }`
- Enabled vue/prefer-template rule
- Updated vue/require-direct-export rule with `{ disallowFunctionalComponentFunction: false }`
- Enabled vue/require-explicit-emits rule with `{ allowProps: false }`
- Enabled vue/require-slots-as-functions rule
- Enabled vue/require-toggle-inside-transition rule
- Enabled vue/return-in-emits-validator rule
- Enabled vue/space-in-parens rule with `'never'`
- Enabled vue/template-curly-spacing rule with `'never'`
- Enabled vue/v-for-delimiter-style rule with `'in'`
- Enabled vue/v-on-event-hyphenation rule with `'always'`
- Updated vue/v-slot-style rule with `'shorthand'`
- Enabled vue/valid-next-tick rule
- Disabled vue/valid-v-bind-sync rule
- Enabled vue/valid-v-is rule

### Removed

- Removed Vue 2.x support


## [7.0.1] - 2020-07-28

### Changed

- Renamed package to `@koffeine/eslint-config-vue`


## [7.0.0] - 2020-07-24

### Changed

- Updated eslint-plugin-vue to 6.2.2
- Updated vue/attributes-order rule with `{ order: [ 'DEFINITION', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', 'UNIQUE', 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT' ], alphabetical: false }`
- Updated vue/camelcase rule with `{ properties: 'always', ignoreDestructuring: false, ignoreImports: false }`
- Enabled vue/component-definition-name-casing rule with `'PascalCase'`
- Updated vue/component-name-in-template-casing rule with `'PascalCase', { registeredComponentsOnly: false }`
- Enabled vue/component-tags-order rule with `{ order: [ 'script', 'template', 'style' ] }`
- Updated vue/html-closing-bracket-spacing rule with `{ startTag: 'never', endTag: 'never', selfClosingTag: 'never' }`
- Updated vue/html-indent rule with `'tab', { attribute: 1, baseIndent: 1, closeBracket: 0, alignAttributesVertically: true }`
- Updated vue/html-quotes rule with `'double', { avoidEscape: false }`
- Updated vue/html-self-closing rule with `{ html: { void: 'never', normal: 'never', component: 'always' }, svg: 'never', math: 'never' }`
- Updated vue/match-component-file-name rule with `{ extensions: [ 'vue' ], shouldMatchCase: true }`
- Updated vue/multiline-html-element-content-newline rule with `{ ignoreWhenEmpty: true, ignores: [ 'pre', 'textarea', 'a', 'abbr', 'audio', 'b', 'bdi', 'bdo', 'canvas', 'cite', 'code', 'data', 'del', 'dfn', 'em', 'i', 'iframe', 'ins', 'kbd', 'label', 'map', 'mark', 'noscript', 'object', 'output', 'picture', 'q', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'svg', 'time', 'u', 'var', 'video' ], allowEmptyLines: false }`
- Updated vue/name-property-casing with `'PascalCase'`
- Disabled vue/no-confusing-v-for-v-if rule
- Enabled vue/no-deprecated-slot-attribute rule
- Enabled vue/no-deprecated-slot-scope-attribute rule
- Enabled vue/no-irregular-whitespace rule with `{ skipStrings: false, skipComments: false, skipRegExps: false, skipTemplates: false, skipHTMLAttributeValues: false, skipHTMLTextContents: false }`
- Updated vue/no-multi-spaces rule with `{ ignoreProperties: false }`
- Updated vue/no-parsing-error rule with `{ 'abrupt-closing-of-empty-comment': true, 'absence-of-digits-in-numeric-character-reference': true, 'cdata-in-html-content': true, 'character-reference-outside-unicode-range': true, 'control-character-in-input-stream': true, 'control-character-reference': true, 'eof-before-tag-name': true, 'eof-in-cdata': true, 'eof-in-comment': true, 'eof-in-tag': true, 'incorrectly-closed-comment': true, 'incorrectly-opened-comment': true, 'invalid-first-character-of-tag-name': true, 'missing-attribute-value': true, 'missing-end-tag-name': true, 'missing-semicolon-after-character-reference': true, 'missing-whitespace-between-attributes': true, 'nested-comment': true, 'noncharacter-character-reference': true, 'noncharacter-in-input-stream': true, 'null-character-reference': true, 'surrogate-character-reference': true, 'surrogate-in-input-stream': true, 'unexpected-character-in-attribute-name': true, 'unexpected-character-in-unquoted-attribute-value': true, 'unexpected-equals-sign-before-attribute-name': true, 'unexpected-null-character': true, 'unexpected-question-mark-instead-of-tag-name': true, 'unexpected-solidus-in-tag': true, 'unknown-named-character-reference': true, 'end-tag-with-attributes': true, 'duplicate-attribute': true, 'end-tag-with-trailing-solidus': true, 'non-void-html-element-start-tag-with-trailing-solidus': false, 'x-invalid-end-tag': true, 'x-invalid-namespace': true }`
- Enabled vue/no-reserved-component-names rule
- Enabled vue/no-static-inline-styles rule with `{ allowBinding: false }`
- Enabled vue/no-unsupported-features rule with `{ version: '^2.6.0' }`
- Updated vue/order-in-components rule with `{ order: [ 'el', 'name', 'key', 'parent', 'functional', [ 'delimiters', 'comments' ], [ 'components', 'directives', 'filters' ], 'extends', 'mixins', [ 'provide', 'inject' ], 'ROUTER_GUARDS', 'layout', 'middleware', 'validate', 'scrollToTop', 'transition', 'loading', 'inheritAttrs', 'model', [ 'props', 'propsData' ], 'emits', 'setup', 'asyncData', 'data', 'fetch', 'head', 'computed', 'watch', 'watchQuery', 'LIFECYCLE_HOOKS', 'methods', [ 'template', 'render' ], 'renderError' ] }`
- Enabled vue/padding-line-between-blocks rule with `'always'`
- Enabled vue/valid-v-bind-sync rule


## [6.0.1] - 2019-11-14

### Changed

- Updated eslint-plugin-vue to 6.0.1


## [6.0.0] - 2019-11-07

### Changed

- Updated eslint-plugin-vue to 6.0.0
- Enabled vue/dot-location rule with `'property'`
- Enabled vue/keyword-spacing rule with `{ before: true, after: true }`
- Enabled vue/no-deprecated-scope-attribute rule
- Enabled vue/no-empty-pattern rule
- Enabled vue/v-slot-style rule with `{ atComponent: 'shorthand', default: 'shorthand', named: 'shorthand' }`
- Enabled vue/valid-v-slot rule


## [5.0.0] - 2019-06-25

### Changed

- Updated eslint-plugin-vue to 5.2.3


## [4.0.3] - 2019-03-01

### Changed

- Disabled vue/v-on-function-call rule


## [4.0.2] - 2019-02-19

### Changed

- Updated eslint-plugin-vue to 5.2.2


## [4.0.1] - 2019-02-14

### Changed

- Updated eslint-plugin-vue to 5.2.1
- Enabled vue/no-async-in-computed-properties rule


## [4.0.0] - 2019-02-14

### Changed

- Updated eslint-plugin-vue to 5.2.0
- Enabled vue/array-bracket-spacing rule with `'always', { singleValue: true, objectsInArrays: true, arraysInArrays: true }`
- Enabled vue/arrow-spacing rule with `{ before: true, after: true }`
- Enabled vue/block-spacing rule with `'always'`
- Enabled vue/brace-style rule with `'1tbs', { allowSingleLine: true }`
- Enabled vue/camelcase rule with `{ properties: 'always' }`
- Enabled vue/comma-dangle rule with `'never'`
- Enabled vue/eqeqeq rule with `'smart'`
- Enabled vue/match-component-file-name rule
- Disabled vue/no-async-in-computed-properties rule
- Enalbed vue/key-spacing rule with `{ mode: 'minimum' }`
- Enabled vue/object-curly-spacing rule with `'always', { arraysInObjects: true, objectsInObjects: true }`
- Enabled vue/require-direct-export rule
- Enabled vue/space-infix-ops rule with `{ int32Hint: false }`
- Enabled vue/space-unary-ops rule with `{ words: true, nonwords: false }`
- Enabled vue/v-on-function-call rule with `'never'`


## [3.0.2] - 2019-01-07

### Changed

- Updated eslint-plugin-vue to 5.1.0


## [3.0.1] - 2018-12-04

### Changed

- Updated eslint-plugin-vue to 5.0.0


## [3.0.0] - 2018-12-03

### Changed

- Updated vue/no-unused-components rule with `{ ignoreWhenBindingPresent: true }`
- Enabled vue/use-v-on-exact rule


## [2.0.2] - 2018-11-26

### Changed

- Updated eslint-plugin-vue to 5.0.0-beta.5


## [2.0.1] - 2018-11-16

### Changed

- Updated eslint-plugin-vue to 5.0.0-beta.4


## [2.0.0] - 2018-11-12

### Removed

- Removed plugins and parser configuration


## [1.0.1] - 2018-11-11


## [1.0.0] - 2018-11-06

### Added

- Initial public release
