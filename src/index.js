'use strict';

module.exports = {
	rules: {
		// BASE RULES

		'vue/comment-directive': [ 'error', { 'reportUnusedDisableDirectives': true } ],
		'vue/jsx-uses-vars': 'off',
		'vue/script-setup-uses-vars': 'error',

		// ESSENTIAL

		'vue/no-arrow-functions-in-watch': 'error',
		'vue/no-async-in-computed-properties': 'error',
		'vue/no-deprecated-data-object-declaration': 'error',
		'vue/no-deprecated-destroyed-lifecycle': 'error',
		'vue/no-deprecated-dollar-listeners-api': 'error',
		'vue/no-deprecated-dollar-scopedslots-api': 'error',
		'vue/no-deprecated-events-api': 'error',
		'vue/no-deprecated-filter': 'error',
		'vue/no-deprecated-functional-template': 'error',
		'vue/no-deprecated-html-element-is': 'error',
		'vue/no-deprecated-inline-template': 'error',
		'vue/no-deprecated-props-default-this': 'error',
		'vue/no-deprecated-scope-attribute': 'error',
		'vue/no-deprecated-slot-attribute': 'error',
		'vue/no-deprecated-slot-scope-attribute': 'error',
		'vue/no-deprecated-v-bind-sync': 'error',
		'vue/no-deprecated-v-on-native-modifier': 'error',
		'vue/no-deprecated-v-on-number-modifiers': 'error',
		'vue/no-deprecated-vue-config-keycodes': 'error',
		'vue/no-dupe-keys': 'error',
		'vue/no-dupe-v-else-if': 'error',
		'vue/no-duplicate-attributes': [ 'error', { 'allowCoexistClass': true, 'allowCoexistStyle': true } ],
		'vue/no-lifecycle-after-await': 'error',
		'vue/no-mutating-props': 'off',
		'vue/no-parsing-error': [ 'error', {
			'abrupt-closing-of-empty-comment': true,
			'absence-of-digits-in-numeric-character-reference': true,
			'cdata-in-html-content': true,
			'character-reference-outside-unicode-range': true,
			'control-character-in-input-stream': true,
			'control-character-reference': true,
			'eof-before-tag-name': true,
			'eof-in-cdata': true,
			'eof-in-comment': true,
			'eof-in-tag': true,
			'incorrectly-closed-comment': true,
			'incorrectly-opened-comment': true,
			'invalid-first-character-of-tag-name': true,
			'missing-attribute-value': true,
			'missing-end-tag-name': true,
			'missing-semicolon-after-character-reference': true,
			'missing-whitespace-between-attributes': true,
			'nested-comment': true,
			'noncharacter-character-reference': true,
			'noncharacter-in-input-stream': true,
			'null-character-reference': true,
			'surrogate-character-reference': true,
			'surrogate-in-input-stream': true,
			'unexpected-character-in-attribute-name': true,
			'unexpected-character-in-unquoted-attribute-value': true,
			'unexpected-equals-sign-before-attribute-name': true,
			'unexpected-null-character': true,
			'unexpected-question-mark-instead-of-tag-name': true,
			'unexpected-solidus-in-tag': true,
			'unknown-named-character-reference': true,
			'end-tag-with-attributes': true,
			'duplicate-attribute': true,
			'end-tag-with-trailing-solidus': true,
			'non-void-html-element-start-tag-with-trailing-solidus': false,
			'x-invalid-end-tag': true,
			'x-invalid-namespace': true
		} ],
		'vue/no-ref-as-operand': 'error',
		'vue/no-reserved-keys': 'error',
		'vue/no-setup-props-destructure': 'error',
		'vue/no-shared-component-data': 'error',
		'vue/no-side-effects-in-computed-properties': 'error',
		'vue/no-template-key': 'error',
		'vue/no-textarea-mustache': 'error',
		'vue/no-unused-components': [ 'error', { 'ignoreWhenBindingPresent': true } ],
		'vue/no-unused-vars': 'error',
		'vue/no-use-v-if-with-v-for': [ 'error', { 'allowUsingIterationVar': false } ],
		'vue/no-v-for-template-key-on-child': 'error',
		'vue/no-watch-after-await': 'error',
		'vue/require-component-is': 'error',
		'vue/require-prop-type-constructor': 'error',
		'vue/require-render-return': 'error',
		'vue/require-slots-as-functions': 'error',
		'vue/require-toggle-inside-transition': 'error',
		'vue/require-v-for-key': 'error',
		'vue/require-valid-default-prop': 'error',
		'vue/return-in-computed-property': [ 'error', { 'treatUndefinedAsUnspecified': true } ],
		'vue/return-in-emits-validator': 'error',
		'vue/use-v-on-exact': 'error',
		'vue/valid-template-root': 'error',
		'vue/valid-v-bind': 'error',
		'vue/valid-v-cloak': 'error',
		'vue/valid-v-else': 'error',
		'vue/valid-v-else-if': 'error',
		'vue/valid-v-for': 'error',
		'vue/valid-v-html': 'error',
		'vue/valid-v-if': 'error',
		'vue/valid-v-is': 'error',
		'vue/valid-v-model': 'error',
		'vue/valid-v-on': 'error',
		'vue/valid-v-once': 'error',
		'vue/valid-v-pre': 'error',
		'vue/valid-v-show': 'error',
		'vue/valid-v-slot': 'error',
		'vue/valid-v-text': 'error',

		// STRONGLY RECOMMENDED

		'vue/attribute-hyphenation': [ 'error', 'always' ],
		'vue/component-definition-name-casing': [ 'error', 'PascalCase' ],
		'vue/html-closing-bracket-newline': 'off',
		'vue/html-closing-bracket-spacing': [ 'error', { 'startTag': 'never', 'endTag': 'never', 'selfClosingTag': 'always' } ],
		'vue/html-end-tags': 'error',
		'vue/html-indent': [ 'error', 'tab', { 'attribute': 1, 'baseIndent': 1, 'closeBracket': 0, 'alignAttributesVertically': true } ],
		'vue/html-quotes': [ 'error', 'double', { 'avoidEscape': false } ],
		'vue/html-self-closing': [ 'error', { 'html': { 'void': 'never', 'normal': 'never', 'component': 'always' }, 'svg': 'always', 'math': 'always' } ],
		'vue/max-attributes-per-line': 'off',
		'vue/multiline-html-element-content-newline': [ 'error', { 'ignoreWhenEmpty': true, 'ignores': [ 'pre', 'textarea', 'a', 'abbr', 'audio', 'b', 'bdi', 'bdo', 'canvas', 'cite', 'code', 'data', 'del', 'dfn', 'em', 'i', 'iframe', 'ins', 'kbd', 'label', 'map', 'mark', 'noscript', 'object', 'output', 'picture', 'q', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'svg', 'time', 'u', 'var', 'video' ], 'allowEmptyLines': false } ],
		'vue/mustache-interpolation-spacing': [ 'error', 'always' ],
		'vue/no-multi-spaces': [ 'error', { 'ignoreProperties': false } ],
		'vue/no-spaces-around-equal-signs-in-attribute': 'error',
		'vue/no-template-shadow': 'error',
		'vue/one-component-per-file': 'error',
		'vue/prop-name-casing': [ 'error', 'camelCase' ],
		'vue/require-default-prop': 'off',
		'vue/require-explicit-emits': [ 'error', { 'allowProps': false } ],
		'vue/require-prop-types': 'error',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/v-bind-style': [ 'error', 'shorthand' ],
		'vue/v-on-style': [ 'error', 'shorthand' ],
		'vue/v-slot-style': [ 'error', 'shorthand' ],

		// RECOMMENDED

		'vue/attributes-order': [ 'error', {
			'order': [
				'DEFINITION',
				'LIST_RENDERING',
				'CONDITIONALS',
				'RENDER_MODIFIERS',
				'GLOBAL',
				[ 'UNIQUE', 'SLOT' ],
				'TWO_WAY_BINDING',
				'OTHER_DIRECTIVES',
				'OTHER_ATTR',
				'EVENTS',
				'CONTENT'
			],
			'alphabetical': false
		} ],
		'vue/component-tags-order': [ 'error', { 'order': [ 'script', 'template', 'style' ] } ],
		'vue/no-lone-template': [ 'error', { 'ignoreAccessible': false } ],
		'vue/no-multiple-slot-args': 'error',
		'vue/no-v-html': 'error',
		'vue/order-in-components': [ 'error', { 'order': [
			'el',
			'name',
			'key',
			'parent',
			'functional',
			[ 'delimiters', 'comments' ],
			[ 'components', 'directives', 'filters' ],
			'extends',
			'mixins',
			[ 'provide', 'inject' ],
			'ROUTER_GUARDS',
			'layout',
			'middleware',
			'validate',
			'scrollToTop',
			'transition',
			'loading',
			'inheritAttrs',
			'model',
			[ 'props', 'propsData' ],
			'emits',
			'setup',
			'asyncData',
			'data',
			'fetch',
			'head',
			'computed',
			'watch',
			'watchQuery',
			'LIFECYCLE_HOOKS',
			'methods',
			[ 'template', 'render' ],
			'renderError'
		] } ],
		'vue/this-in-template': [ 'error', 'never' ],

		// UNCATEGORIZED

		'vue/block-lang': 'off',
		'vue/block-tag-newline': [ 'error', {
			'singleline': 'consistent',
			'multiline': 'consistent',
			'maxEmptyLines': 0,
			'blocks': {
				'template': {
					'singleline': 'consistent',
					'multiline': 'consistent',
					'maxEmptyLines': 0
				},
				'script': {
					'singleline': 'consistent',
					'multiline': 'consistent',
					'maxEmptyLines': 0
				},
				'my-block': {
					'singleline': 'consistent',
					'multiline': 'consistent',
					'maxEmptyLines': 0
				}
			}
		} ],
		'vue/component-api-style': [ 'error', [ 'script-setup' ] ],
		'vue/component-name-in-template-casing': [ 'error', 'PascalCase', { 'registeredComponentsOnly': false } ],
		'vue/custom-event-name-casing': [ 'error', 'kebab-case' ],
		'vue/html-button-has-type': [ 'error', { 'button': true, 'submit': true, 'reset': true } ],
		'vue/html-comment-content-newline': 'off',
		'vue/html-comment-content-spacing': 'off',
		'vue/html-comment-indent': 'off',
		'vue/match-component-file-name': [ 'error', { 'extensions': [ 'vue' ], 'shouldMatchCase': true } ],
		'vue/new-line-between-multi-line-property': 'off',
		'vue/next-tick-style': 'off',
		'vue/no-bare-strings-in-template': 'off',
		'vue/no-boolean-default': 'off',
		'vue/no-deprecated-v-is': 'error',
		'vue/no-duplicate-attr-inheritance': 'error',
		'vue/no-empty-component-block': 'error',
		'vue/no-export-in-script-setup': 'error',
		'vue/no-invalid-model-keys': 'error',
		'vue/no-multiple-objects-in-class': 'error',
		'vue/no-potential-component-option-typo': [ 'error', { 'presets': [ 'vue' ], 'threshold': 1 } ],
		'vue/no-reserved-component-names': [ 'error', { 'disallowVueBuiltInComponents': true, 'disallowVue3BuiltInComponents': true } ],
		'vue/no-restricted-block': 'off',
		'vue/no-restricted-call-after-await': 'off',
		'vue/no-restricted-class': 'off',
		'vue/no-restricted-component-options': 'off',
		'vue/no-restricted-custom-event': 'off',
		'vue/no-restricted-props': 'off',
		'vue/no-restricted-static-attribute': 'off',
		'vue/no-restricted-v-bind': [ 'error', '/^v-/' ],
		'vue/no-static-inline-styles': [ 'warn', { 'allowBinding': false } ],
		'vue/no-template-target-blank': 'off',
		'vue/no-this-in-before-route-enter': 'off',
		'vue/no-unregistered-components': 'off',
		'vue/no-unsupported-features': [ 'error', { 'version': '^3.0.0' } ],
		'vue/no-unused-properties': 'off',
		'vue/no-unused-refs': 'off',
		'vue/no-use-computed-property-like-method': 'error',
		'vue/no-useless-mustaches': [ 'error', { 'ignoreIncludesComment': false, 'ignoreStringEscape': false } ],
		'vue/no-useless-template-attributes': 'error',
		'vue/no-useless-v-bind': 'error',
		'vue/no-v-text': 'error',
		'vue/padding-line-between-blocks': [ 'error', 'always' ],
		'vue/require-direct-export': [ 'error', { 'disallowFunctionalComponentFunction': false } ],
		'vue/require-emit-validator': 'off',
		'vue/require-expose': 'off',
		'vue/require-name-property': 'off',
		'vue/script-indent': 'off',
		'vue/sort-keys': 'off',
		'vue/static-class-names-order': 'off',
		'vue/v-for-delimiter-style': [ 'error', 'in' ],
		'vue/v-on-event-hyphenation': [ 'error', 'always' ],
		'vue/v-on-function-call': 'off',
		'vue/valid-define-emits': 'error',
		'vue/valid-define-props': 'error',
		'vue/valid-next-tick': 'error',
		'vue/valid-v-memo': 'error',

		// EXTENSION RULES

		'vue/array-bracket-newline': 'off',
		'vue/array-bracket-spacing': [ 'error', 'always', { 'singleValue': true, 'objectsInArrays': true, 'arraysInArrays': true } ],
		'vue/arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
		'vue/block-spacing': [ 'error', 'always' ],
		'vue/brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ],
		'vue/camelcase': [ 'error', { 'properties': 'always', 'ignoreDestructuring': false, 'ignoreImports': false, 'ignoreGlobals': false } ],
		'vue/comma-dangle': [ 'error', 'never' ],
		'vue/comma-spacing': [ 'error', { 'before': false, 'after': true } ],
		'vue/comma-style': [ 'error', 'last' ],
		'vue/dot-location': [ 'error', 'property' ],
		'vue/dot-notation': [ 'error', { 'allowKeywords': true } ],
		'vue/eqeqeq': [ 'error', 'smart' ],
		'vue/func-call-spacing': [ 'error', 'never' ],
		'vue/key-spacing': [ 'error', { 'mode': 'minimum' } ],
		'vue/keyword-spacing': [ 'error', { 'before': true, 'after': true } ],
		'vue/max-len': 'off',
		'vue/no-constant-condition': [ 'error', { 'checkLoops': false } ],
		'vue/no-empty-pattern': 'error',
		'vue/no-extra-parens': [ 'error', 'all', { 'conditionalAssign': true, 'returnAssign': true, 'nestedBinaryExpressions': false, 'ignoreJSX': 'none', 'enforceForArrowConditionals': true, 'enforceForSequenceExpressions': true, 'enforceForNewInMemberExpressions': false, 'enforceForFunctionPrototypeMethods': false } ],
		'vue/no-irregular-whitespace': [ 'error', { 'skipStrings': true, 'skipComments': true, 'skipRegExps': true, 'skipTemplates': true } ],
		'vue/no-restricted-syntax': 'off',
		'vue/no-sparse-arrays': 'error',
		'vue/no-useless-concat': 'error',
		'vue/object-curly-newline': 'off',
		'vue/object-curly-spacing': [ 'error', 'always', { 'arraysInObjects': true, 'objectsInObjects': true } ],
		'vue/object-property-newline': 'off',
		'vue/operator-linebreak': [ 'error', 'before' ],
		'vue/prefer-template': 'error',
		'vue/space-in-parens': [ 'error', 'never' ],
		'vue/space-infix-ops': [ 'error', { 'int32Hint': false } ],
		'vue/space-unary-ops': [ 'error', { 'words': true, 'nonwords': false } ],
		'vue/template-curly-spacing': [ 'error', 'never' ],

		// VUE.JS 2.X

		'vue/no-custom-modifiers-on-v-model': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/no-v-for-template-key': 'off',
		'vue/no-v-model-argument': 'off',
		'vue/valid-v-bind-sync': 'off'
	}
};
