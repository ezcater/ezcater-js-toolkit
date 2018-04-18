module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        // Copy these settings into a .prettierrc for integration w IDEs
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'es5',
        bracketSpacing: false,
      },
    ],
  },
};
