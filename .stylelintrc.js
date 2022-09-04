module.exports = {
  extends: ['stylelint-config-standard'],
  customSyntax: '@stylelint/postcss-css-in-js',
  plugins: ['stylelint-order'],
  rules: {
    'custom-property-pattern': null,
    'declaration-colon-newline-after': null,
    'function-name-case': null,
    'no-empty-first-line': null,
    'order/properties-alphabetical-order': true,
    'string-quotes': null,
    'value-keyword-case': null,
  },
}
