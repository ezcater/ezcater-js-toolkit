# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- fix: allow eslint v8 as peer dependency
- feat: only extend typescript rules to .ts/.tsx files
- build: bump eslint-import-resolver-typescript from 1.1.1 to 2.7.1

### Breaking changes
- Replaced `eslint-config-ezcater-react` with `eslint-config-ezcater-base`. Consumers are expected to add `eslint-config-ezcater-react` separately if react linter rules are necessary.
- Drop support for `eslint-plugin-prettier`, which is no longer recommended by Prettier. This is a breaking change because if consumers have any code comments including `prettier/prettier` eslint will now fail. Consumers are now expected to run `prettier --check` in CI if they want to keep the code quality validation. It's recommended to use `prettier --write` in lint-staged if you want to auto-format code and or use VSCode Prettier extension.

## [4.0.1] - 2022-03-28
### Fix
- Make `typescript` a peer dependency instead of dependency
