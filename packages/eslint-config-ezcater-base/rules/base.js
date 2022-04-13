module.exports = {
  rules: {
    'arrow-body-style': 'off', // Copying behavior of eslint-plugin-prettier
    eqeqeq: ['error', 'smart'],
    'linebreak-style': 'off',
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    'no-console': 'error',
    'no-extra-bind': 'error',
    'no-implicit-globals': 'error',
    'prefer-arrow-callback': 'off', // Copying behavior of eslint-plugin-prettier
    'prefer-promise-reject-errors': 'error',
    curly: ['error', 'multi-or-nest'],
    'object-curly-spacing': ['error', 'never'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'object-curly-newline': ['error', {consistent: true}],
    'operator-linebreak': ['error', 'after', {overrides: {'?': 'before', ':': 'before'}}],
    'quote-props': ['error', 'as-needed'],
    'nonblock-statement-body-position': 'off',
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'implicit-arrow-linebreak': 'off',
    // causes "Cannot read property 'range' of null". See: https://github.com/babel/babel-eslint/issues/530
    indent: 'off',
    // causes "Cannot read property 'range' of null". See: https://github.com/babel/babel-eslint/issues/530
    'template-curly-spacing': 'off',
    'arrow-parens': ['error', 'as-needed'],
  },
};
