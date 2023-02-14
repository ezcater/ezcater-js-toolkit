# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Breaking changes
- Bump `esling-config-ezcater-base` from 5.0.1 to 6.0.0, which has the breaking change of requiring `eslint-plugin-import` as a peer dependency.
- Move: `eslint-plugin-filenames`, `eslint-plugin-import`, `eslint-plugin-jest`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `eslint-plugin-react-hooks` from dependencies to requiring as peer dependencies. This is to follow eslint best practices for shareable configs mentioned [here](https://eslint.org/docs/latest/extend/shareable-configs#publishing-a-shareable-config).

## [5.0.0] - 2022-04-14
- fix: allow eslint v8 as peer dependency
- fix: "detect" react version instead of fixed version

### Breaking changes
- Upgrade to `eslint-config-ezcater-base@5` which drops support for `eslint-plugin-prettier`. This is a breaking change because if consumers have any code comments including `prettier/prettier` eslint will now fail. Consumers are now expected to run `prettier --check` in CI if they want to keep the code quality validation. It's recommended to use `prettier --write` in lint-staged if you want to auto-format code and or use VSCode Prettier extension.
- Remove `@babel/core` and `@babel/eslint-parser` as dependencies. Consumers will now be expected to add their own eslint parser if they need it.
