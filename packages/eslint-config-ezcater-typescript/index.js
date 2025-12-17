console.warn(
  '\x1b[33m⚠️  DEPRECATION WARNING:\x1b[0m eslint-config-ezcater-typescript is deprecated and no longer maintained.\n' +
    'See https://github.com/ezcater/ezcater-js-toolkit for migration guidance.\n'
);

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
