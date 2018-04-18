# eslint-config-ezcater-base

[![npm version](https://badge.fury.io/js/eslint-config-ezcater-base.svg)](https://badge.fury.io/js/eslint-config-ezcater-base)

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+, React, JSX, and Prettier.

1.  Install the package as a dev dependency for your project:

```sh
npm i eslint-config-ezcater-base --save-dev
```

2.  Add `ezcater-base` to the `extends` section of your project's `.eslintrc`:

```json
extends: ['ezcater-base'],
```

3.  Add optional scripts to your `package.json` to run linting checks:

```json
"scripts": {
  "fix:lint": "eslint . --fix",
  "validate:lint": "eslint .",
}
```

4. ESLint is configured here to run Prettier along with the other linting rules. But if your text editor supports a Prettier integration, you will probably need to copy the rules in `./rules/prettier.js` into a `.prettierrc` in your project's root directory:

```json
...in .prettierrc

{
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "es5",
  etc...
}
```