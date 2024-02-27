// @ts-check
const originalArgv = process.argv;

/** @param {Partial<ReturnType<import('cross-spawn')['sync']>>} [syncResult] */
const buildMockCrossSpawn = syncResult => {
  const crossSpawn = require('cross-spawn');
  jest.spyOn(crossSpawn, 'sync').mockReturnValue({
    output: [],
    pid: 1234,
    signal: null,
    status: 1,
    stderr: '',
    stdout: '',
    ...syncResult,
  });

  return crossSpawn;
};

/**
 * @param {Object} [props]
 * @param {string[]} [props.argv]
 */
const executeScript = (props = {}) => {
  process.argv = props.argv || [];
  require('../lint');
};

describe('lint', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.spyOn(process, 'exit').mockImplementation();
  });

  afterEach(() => {
    process.argv = originalArgv;
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('uses eslint with default args', () => {
    const readPkgUp = require('read-pkg-up');
    const crossSpawn = buildMockCrossSpawn();
    jest.spyOn(readPkgUp, 'sync').mockReturnValue({
      packageJson: {dependencies: {}},
      path: '/',
    });
    executeScript();

    expect(crossSpawn.sync).toHaveBeenCalledTimes(1);
    expect(crossSpawn.sync).toHaveBeenCalledWith(
      './packages/ez-scripts/node_modules/eslint/bin/eslint.js',
      [
        '--config',
        './packages/ez-scripts/src/files/eslintrc.js',
        '--ignore-path',
        './packages/ez-scripts/src/files/.eslintignore',
        '--cache',
        '.',
        '--ext',
        'js,jsx,ts,tsx',
      ],
      {stdio: 'inherit'}
    );
  });

  describe('with package.json prop "eslintConfig"', () => {
    it('does not use ez-scripts eslint config', () => {
      const readPkgUp = require('read-pkg-up');
      const crossSpawn = buildMockCrossSpawn();
      jest.spyOn(readPkgUp, 'sync').mockReturnValue({
        packageJson: {
          dependencies: {},
          eslintConfig: {'no-console': 'off'},
        },
        path: '/',
      });
      executeScript();

      expect(crossSpawn.sync).toHaveBeenCalledTimes(1);
      expect(crossSpawn.sync).toHaveBeenCalledWith(
        './packages/ez-scripts/node_modules/eslint/bin/eslint.js',
        [
          '--ignore-path',
          './packages/ez-scripts/src/files/.eslintignore',
          '--cache',
          '.',
          '--ext',
          'js,jsx,ts,tsx',
        ],
        {stdio: 'inherit'}
      );
    });
  });

  describe('with package.json prop "eslintIgnore"', () => {
    it('does not use ez-scripts eslint ignore config', () => {
      const readPkgUp = require('read-pkg-up');
      const crossSpawn = buildMockCrossSpawn();
      jest.spyOn(readPkgUp, 'sync').mockReturnValue({
        packageJson: {
          dependencies: {},
          eslintIgnore: ['fake-file.txt'],
        },
        path: '/',
      });
      executeScript();

      expect(crossSpawn.sync).toHaveBeenCalledTimes(1);
      expect(crossSpawn.sync).toHaveBeenCalledWith(
        './packages/ez-scripts/node_modules/eslint/bin/eslint.js',
        [
          '--config',
          './packages/ez-scripts/src/files/eslintrc.js',
          '--cache',
          '.',
          '--ext',
          'js,jsx,ts,tsx',
        ],
        {stdio: 'inherit'}
      );
    });
  });

  describe('with package.json props "eslintConfig" and "eslintIgnore"', () => {
    it('does not use ez-scripts eslint config or eslint ignore config', () => {
      const readPkgUp = require('read-pkg-up');
      const crossSpawn = buildMockCrossSpawn();
      jest.spyOn(readPkgUp, 'sync').mockReturnValue({
        packageJson: {
          dependencies: {},
          eslintConfig: {'no-console': 'off'},
          eslintIgnore: ['fake-file.txt'],
        },
        path: '/',
      });
      executeScript();

      expect(crossSpawn.sync).toHaveBeenCalledTimes(1);
      expect(crossSpawn.sync).toHaveBeenCalledWith(
        './packages/ez-scripts/node_modules/eslint/bin/eslint.js',
        ['--cache', '.', '--ext', 'js,jsx,ts,tsx'],
        {stdio: 'inherit'}
      );
    });
  });
});
