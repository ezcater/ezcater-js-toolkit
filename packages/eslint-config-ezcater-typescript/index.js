module.exports = {
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        require.resolve('eslint-config-ezcater-base'),
        'plugin:@typescript-eslint/recommended',
        './rules/typescript.js',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
};
