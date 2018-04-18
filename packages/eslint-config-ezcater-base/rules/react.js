module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['jsx-a11y', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 'error',
    'react/jsx-key': 'error',
    'react/jsx-filename-extension': 'off',
    'react/no-array-index-key': 'off',
    'react/no-danger': 'off',
    'react/no-direct-mutation-state': 'error',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: '16.0',
    },
  },
};
