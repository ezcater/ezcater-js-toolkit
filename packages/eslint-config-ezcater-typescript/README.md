# eslint-config-ezcater-typescript

[![npm version](https://badge.fury.io/js/eslint-config-ezcater-typescript.svg)](https://badge.fury.io/js/eslint-config-ezcater-typescript)

## Plugins and extensions

This includes the following plugins and extensions:

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser)
- [eslint-config-ezcater-base](https://github.com/ezcater/ezcater-js-toolkit/tree/main/packages/eslint-config-ezcater-base)
- [eslint-import-resolver-typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript)

## Usage

1.  Install the package as a dev dependency for your project:

```sh
# NPM
npm i eslint-config-ezcater-typescript --save-dev

# Yarn
yarn add eslint-config-ezcater-typescript -D
```

2.  Add `ezcater-typescript` to the `extends` section of your project's `.eslintrc`:

```json
{
  "extends": ["ezcater-typescript"]
}
```
