module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    require.resolve('eslint-config-ezcater-react'),
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/indent': 'off',
  },
  settings: {
    parser: 'typescript-eslint-parser',
    plugins: ['import'],
    'import/resolver': {
      typescript: {},
    },
  },
};
