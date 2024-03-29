# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [6.0.0] - 2023-02-22
### Breaking changes
- Bump `esling-config-ezcater-base` from 5.0.1 to 6.0.0, which has the breaking change of requiring `eslint-plugin-import` as a peer dependency.
- Move: `@typescript-eslint/eslint-plugin`, `eslint-plugin-import` from dependencies to requiring as peer dependencies. This is to follow eslint best practices for shareable configs mentioned [here](https://eslint.org/docs/latest/extend/shareable-configs#publishing-a-shareable-config).

## [5.0.1] - 2022-04-27
- fix: extend `eslint-config-ezcater-base` from config

## [5.0.0] - 2022-04-25
- fix: allow eslint v8 as peer dependency
- feat: only extend typescript rules to .ts/.tsx files
- build: bump eslint-import-resolver-typescript from 1.1.1 to 2.7.1
- build: bump @typescript-eslint/parser and @typescript-eslint/eslint-plugin from 2.34.0 to 5.5.0

### Breaking changes
- Replaced `eslint-config-ezcater-react` with `eslint-config-ezcater-base`. Consumers are expected to add `eslint-config-ezcater-react` separately if react linter rules are necessary.
- Drop support for `eslint-plugin-prettier`, which is no longer recommended by Prettier. This is a breaking change because if consumers have any code comments including `prettier/prettier` eslint will now fail. Consumers are now expected to run `prettier --check` in CI if they want to keep the code quality validation. It's recommended to use `prettier --write` in lint-staged if you want to auto-format code and or use VSCode Prettier extension.
- @typescript-eslint packages now require typescript version greater than 3.8

## [4.0.1] - 2022-03-28
### Fix
- Make `typescript` a peer dependency instead of dependency
