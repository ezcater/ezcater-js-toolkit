module.exports = {
  rules: {
    'prettier/prettier': [
      'error',
      {
        // Copy these settings into a .prettierrc for integration w IDEs
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'es5',
        bracketSpacing: false,
        arrowParens: 'avoid'
      },
    ],
  },
};
