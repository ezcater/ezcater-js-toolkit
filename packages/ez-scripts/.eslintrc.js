module.exports = {
  extends: [require.resolve('./src/config/eslintrc')],
  rules: {
    'import/no-commonjs': 'off',
    'no-console': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
